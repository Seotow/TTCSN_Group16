// db.js
const mysql = require('mysql2');

// Database configuration with SSL support for production
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'group16',
    port: parseInt(process.env.DB_PORT) || 3306,
    connectTimeout: 60000,
    acquireTimeout: 60000,
    timeout: 60000,
    multipleStatements: true,
    // Enable SSL for production (Railway requires SSL)
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false
};

const db = mysql.createConnection(dbConfig);

// Enhanced connection with better error handling
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        console.error('Config:', {
            host: dbConfig.host,
            user: dbConfig.user,
            database: dbConfig.database,
            port: dbConfig.port,
            ssl: !!dbConfig.ssl
        });
        
        // In production, retry connection
        if (process.env.NODE_ENV === 'production') {
            console.log('Retrying connection in 5 seconds...');
            setTimeout(() => {
                process.exit(1);
            }, 5000);
        } else {
            throw err;
        }
    } else {
        console.log(`✅ Connected to database: ${dbConfig.database} at ${dbConfig.host}`);
    }
});

// Handle connection errors and reconnection
db.on('error', (err) => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('Reconnecting to database...');
        // Create new connection
        const newDb = mysql.createConnection(dbConfig);
        newDb.connect((err) => {
            if (!err) {
                console.log('Reconnected successfully');
            }
        });
    }
});

module.exports = db;