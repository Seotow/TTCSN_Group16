const db = require('../config/db');

// format date to yyyy-mm-dd
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

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
            results.forEach(user => {
                user.birthdate = formatDate(user.birthdate);
            });
            callback(null, results[0]);
        } else {
            callback(null, null);
        }
    })
}

const updateUserInforById = (userId, userData, callback) => {
    const { name, gender, birthdate, phone, address } = userData;
    const sql = `UPDATE customers SET name = ?, gender = ?, birthdate = ?, phone = ?, address = ? WHERE id = ?`;
    db.query(sql, [name, gender, birthdate, phone, address, userId], (err) => {
        console.log(err);
        if (err) return callback(err);
        callback(null);
    });
};

const updateUserPasswordById = (userId, newPassword, callback) => {
    const sql = `UPDATE customers SET password = ? WHERE id = ?`
    db.query(sql, [newPassword, userId], (err) => {
        console.log(err)
        if (err) return callback(err);
        callback(null);
    })
}

module.exports = { 
    getUserByEmailOrPhone, 
    createUser, 
    getUserByEmailAndPassword, 
    getUserById,
    updateUserInforById,
    updateUserPasswordById
};