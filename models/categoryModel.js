const db = require('../config/db'); // Giả sử bạn đã kết nối MySQL trong db.js

// Lấy tất cả danh mục
const getAllCategories = (callback) => {
    const query = 'SELECT * FROM categories';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllCategories
};