const db = require('../config/db'); 

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

const getCategoryById = (categoryId, callback) => {
    const query = 'SELECT * FROM categories WHERE id = ?';
    db.query(query, [categoryId], (err, results) => { 
        if (err) { 
            return callback(err, null);
        }
        callback(null, results[0]);
    })
}

module.exports = {
    getAllCategories,
    getCategoryById
};