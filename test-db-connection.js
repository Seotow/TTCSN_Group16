// Test database connection for Railway
require('dotenv').config();
const mysql = require('mysql2');

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
    // Reduced timeouts for free tier
    connectTimeout: 30000,
    acquireTimeout: 30000
};

console.log('Testing Railway database connection...');
console.log('Config:', {
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    port: dbConfig.port,
    ssl: !!dbConfig.ssl
});

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Connection failed:', err.message);
        console.error('Full error:', err);
        process.exit(1);
    } else {
        console.log('Database connection successful!');
        
        // Test a simple query
        connection.query('SELECT 1 as test', (err, results) => {
            if (err) {
                console.error('Query failed:', err.message);
            } else {
                console.log('Query successful:', results);
            }
            
            // Check if tables exist
            connection.query('SHOW TABLES', (err, tables) => {
                if (err) {
                    console.error('Show tables failed:', err.message);
                } else {
                    console.log('Available tables:', tables.length);
                    tables.forEach(table => {
                        console.log('  -', Object.values(table)[0]);
                    });
                }
                connection.end();
                console.log('Connection test completed!');
            });
        });
    }
});