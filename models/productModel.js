const db = require('../config/db'); 

// Hàm lấy danh sách sản phẩm từ database
const getAllProducts = (callback) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

// Xuất ra để controller có thể gọi
module.exports = {
    getAllProducts
};