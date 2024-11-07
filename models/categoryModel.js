const db = require('../config/db'); 

// Hàm lấy danh sách tất cả thể loại từ database
const getAllCategories = (callback) => {
    const sql = 'SELECT * FROM categories';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Hàm lấy chi tiết thể loại, bao gồm tên nhà sản xuất và các trường liên quan
const getDetailsAllCategories = (callback) => {
    const sql = 
    `SELECT 
        categories.*,
        COUNT(products.id) AS productCount
    FROM categories
    LEFT JOIN products ON categories.id = products.category_id
    GROUP BY categories.id
    ORDER BY categories.id DESC`;
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

// Hàm thêm thể loại mới vào database
const addCategory = ({ name, image }, callback) => {
    const sql = 
    `INSERT INTO categories (name, image) 
    VALUES (?, ?)`;

    db.query(sql, [name, image], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};

// Hàm lấy thông tin thể loại theo ID
const getCategoryById = (id, callback) => {
    const sql = `SELECT * FROM categories WHERE id = ?`;

    db.query(sql, [id], (err, results) => {
        if (err) return callback(err);
        
        callback(null, results[0]);
    });
};

// Hàm cập nhật thông tin thể loại
const updateCategory = (id, { name, image }, callback) => {
    const sql = 
    `UPDATE categories
    SET name = ?, image = ?
    WHERE id = ?`;

    db.query(sql, [name, image, id], (err) => {
        if (err) return callback(err);
        callback(null);
    });
};

// Hàm xóa thể loại theo ID
const deleteCategory = (id, callback) => {
    const sql = `DELETE FROM categories WHERE id = ?`;

    db.query(sql, [id], (err) => {
        if (err) return callback(err);
        callback(null);
    });
};

module.exports = {
    getAllCategories,
    getDetailsAllCategories,
    addCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
};
