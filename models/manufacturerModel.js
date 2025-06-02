const db = require('../config/db'); 

// Lấy tất cả danh mục
const getAllManufacturers = (callback) => {
    const query = 'SELECT * FROM manufacturers';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllManufacturers
};