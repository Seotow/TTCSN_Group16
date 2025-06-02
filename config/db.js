// db.js
const mysql = require('mysql2');

// Database configuration with SSL support for production
const dbConfig = {
    // Railway provides these environment variables automatically
    host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
    user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
    password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '',
    database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'group16',
    port: parseInt(process.env.MYSQLPORT || process.env.DB_PORT) || 3306,
      // Connection pool settings optimized for Railway's $5 free tier
    connectionLimit: process.env.NODE_ENV === 'production' ? 5 : 10, // Reduced for free tier
    acquireTimeout: 30000, // Reduced from 60s to 30s
    timeout: 30000, // Reduced from 60s to 30s
    reconnect: true,
    
    // Keep-alive settings to prevent disconnection
    keepAliveInitialDelay: 0,
    enableKeepAlive: true,
    
    // Additional timeout settings - reduced for free tier
    connectTimeout: 30000, // Reduced from 60s to 30s
    multipleStatements: true,
    
    // Enable SSL for production (Railway requires SSL)
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false
};

// Create connection pool instead of single connection
const pool = mysql.createPool(dbConfig);

// Test the connection pool
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err);
        console.error('Config:', {
            host: dbConfig.host,
            user: dbConfig.user,
            database: dbConfig.database,
            port: dbConfig.port,
            ssl: !!dbConfig.ssl
        });
        
        // In production, exit gracefully
        if (process.env.NODE_ENV === 'production') {
            console.log('Exiting due to database connection failure...');
            setTimeout(() => {
                process.exit(1);
            }, 5000);
        }
    } else {
        console.log(`✅ Connected to database: ${dbConfig.database} at ${dbConfig.host}`);
        connection.release(); // Release the connection back to pool
    }
});

// Handle pool events
pool.on('connection', (connection) => {
    console.log('New connection established as id ' + connection.threadId);
});

pool.on('error', (err) => {
    console.error('Database pool error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 4031) {
        console.log('Database connection lost, pool will handle reconnection...');
    } else {
        throw err;
    }
});

module.exports = pool;