const db = require('../config/db');

const getAdminByEmailAndPassword = (email, password, callback) => {
    const query = 'SELECT * FROM STAFFS WHERE email = ? AND password = ?';
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
}

module.exports = {
    getAdminByEmailAndPassword
}