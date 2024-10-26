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

module.exports = {
    getUserByEmailAndPassword
};
