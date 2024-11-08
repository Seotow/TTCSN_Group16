const db = require('../config/db');

// Tìm người dùng dựa vào email và mật khẩu
const getUserByEmailAndPassword = (email, password, callback) => {

    const query = 'SELECT * FROM CUSTOMERS WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {

        if (err) {
            return callback(err, null);
        }
        if (results.length > 0) {
            callback(null, results[0]);
        } else {
            callback(null, null);
        }
    });
};

// Kiểm tra người dùng dựa vào email hoặc số điện thoại
const getUserByEmailOrPhone = (email, phone, callback) => {
    const query = 'SELECT COUNT(*) as count FROM customers WHERE email = ? OR phone = ?';
    db.query(query, [email, phone], (err, results) => {
        callback(err, results[0].count > 0);
    });
};

// Tạo người dùng mới
const createUser = (name, phone, email, password, callback) => {
    const query = 'INSERT INTO customers (name, phone, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [name, phone, email, password], callback);
};

const getUserById = (userId, callback) => {
    const query = 'SELECT * FROM customers WHERE id = ?'
    db.query(query, [userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (results.length > 0) {
            callback(null, results[0]);
        } else {
            callback(null, null);
        }
    })
}

module.exports = { 
    getUserByEmailOrPhone, 
    createUser, 
    getUserByEmailAndPassword, 
    getUserById 
};