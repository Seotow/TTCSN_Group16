// Database utility functions optimized for Railway's $5 free tier
const pool = require('./db');

/**
 * Execute a query with conservative retry logic for free tier
 * @param {string} sql - SQL query string
 * @param {Array} params - Query parameters
 * @param {Function} callback - Callback function
 * @param {number} retries - Number of retries (default: 2, reduced for free tier)
 */
const executeQuery = (sql, params = [], callback, retries = 2) => {
    pool.query(sql, params, (err, results) => {
        if (err) {
            // Check if it's a connection error that we can retry
            if ((err.code === 'PROTOCOL_CONNECTION_LOST' || 
                 err.code === 4031 || 
                 err.code === 'ECONNRESET' ||
                 err.code === 'ENOTFOUND' ||
                 err.code === 'ETIMEDOUT') && retries > 0) {
                
                console.log(`Database connection error, retrying... (${retries} attempts left)`);
                console.log('Error:', err.message);
                
                // Shorter wait time for free tier
                setTimeout(() => {
                    executeQuery(sql, params, callback, retries - 1);
                }, 500 * (3 - retries)); // Progressive delay: 0.5s, 1s
                
                return;
            }
            
            // If it's not a connection error or we're out of retries, pass the error
            console.error('Database query error:', err);
            return callback(err);
        }
        
        callback(null, results);
    });
};

/**
 * Promise-based query execution with conservative retry logic
 * @param {string} sql - SQL query string
 * @param {Array} params - Query parameters
 * @param {number} retries - Number of retries (default: 2)
 * @returns {Promise} - Promise that resolves with query results
 */
const executeQueryPromise = (sql, params = [], retries = 2) => {
    return new Promise((resolve, reject) => {
        executeQuery(sql, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        }, retries);
    });
};

/**
 * Quick database connection test (optimized for free tier)
 * @param {number} timeout - Timeout in milliseconds (default: 5000ms)
 * @returns {Promise<boolean>} - True if connection is successful
 */
const testConnection = async (timeout = 5000) => {
    try {
        const promise = executeQueryPromise('SELECT 1 as test');
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Connection test timeout')), timeout)
        );
        
        await Promise.race([promise, timeoutPromise]);
        return true;
    } catch (error) {
        console.error('Database connection test failed:', error.message);
        return false;
    }
};

/**
 * Get pool status for monitoring
 * @returns {Object} - Pool status information
 */
const getPoolStatus = () => {
    return {
        connectionLimit: pool.config.connectionLimit,
        acquireTimeout: pool.config.acquireTimeout,
        timeout: pool.config.timeout,
        environment: process.env.NODE_ENV || 'development'
    };
};

module.exports = {
    executeQuery,
    executeQueryPromise,
    testConnection,
    getPoolStatus,
    pool // Export the pool for direct access if needed
};
