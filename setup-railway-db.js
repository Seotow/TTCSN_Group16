// Setup Railway database with your existing data
require('dotenv').config();
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const dbConfig = {
    // Railway provides these environment variables automatically
    host: process.env.MYSQLHOST || process.env.DB_HOST,
    user: process.env.MYSQLUSER || process.env.DB_USER,
    password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
    database: process.env.MYSQLDATABASE || process.env.DB_NAME,
    port: parseInt(process.env.MYSQLPORT || process.env.DB_PORT) || 3306,
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false,
    multipleStatements: true,
    // Reduced timeouts for free tier
    connectTimeout: 30000,
    acquireTimeout: 30000
};

console.log('🔄 Setting up Railway database...');
console.log('Database config:', {
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    port: dbConfig.port,
    ssl: !!dbConfig.ssl
});

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('❌ Connection failed:', err.message);
        process.exit(1);
    }
    
    console.log('Connected to Railway database');
    
    // Read SQL file
    const sqlFile = path.join(__dirname, 'group16.sql');
    
    if (!fs.existsSync(sqlFile)) {
        console.error('group16.sql file not found');
        process.exit(1);
    }
    
    const sql = fs.readFileSync(sqlFile, 'utf8');
    
    // Remove database creation statements and use existing database
    const cleanSql = sql
        .replace(/CREATE DATABASE.*?;/gi, '')
        .replace(/USE.*?;/gi, '')
        .replace(/DROP DATABASE.*?;/gi, '')
        .replace(/\/\*.*?\*\//gs, '') // Remove comments
        .split(';')
        .filter(statement => statement.trim().length > 0);
    
    console.log(`📋 Executing ${cleanSql.length} SQL statements...`);
    
    let completed = 0;
    
    function executeNext() {
        if (completed >= cleanSql.length) {
            console.log('🎉 Database setup completed!');
            connection.end();
            return;
        }
        
        const statement = cleanSql[completed].trim();
        if (statement) {
            connection.query(statement, (err) => {
                if (err) {
                    console.error(`Error executing statement ${completed + 1}:`, err.message);
                    console.error('Statement:', statement.substring(0, 100) + '...');
                } else {
                    console.log(`Statement ${completed + 1} executed`);
                }
                completed++;
                executeNext();
            });
        } else {
            completed++;
            executeNext();
        }
    }
    
    executeNext();
});
