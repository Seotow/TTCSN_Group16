const db = require('../config/db');

// format date to yyyy-mm-dd
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Hàm lấy danh sách nhân viên từ database
const getAllStaffs = (callback) => {
    const sql = 'SELECT * FROM staffs';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }

        results.forEach(staff => {
            staff.birthdate = formatDate(staff.birthdate);
        });
        callback(null, results);
    });
};

// Hàm thêm nhân viên
const addStaff = ({ name, gender, birthdate, phone, address, email, password, level }, callback) => {
    const genderValue = parseInt(gender); 
    const levelValue = level ? parseInt(level) : 0;

    // Kiểm tra giá trị giới tính
    if (genderValue !== 0 && genderValue !== 1) {
        return callback(new Error('Giới tính không hợp lệ.')); // Trả lỗi nếu giới tính không hợp lệ
    }

    // Chuyển birthdate thành định dạng `timestamp` nếu cần
    let formattedBirthdate = birthdate;
    if (birthdate && birthdate.length === 10) { // Nếu định dạng là `YYYY-MM-DD`
        formattedBirthdate += ' 00:00:00';
    }

    const sql = `INSERT INTO staffs (name, gender, birthdate, phone, address, email, password, level) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [name, genderValue, formattedBirthdate, phone, address, email, password, levelValue], (err) => {
        if (err) {
            return callback(new Error(`Lỗi khi thêm nhân viên: ${err.message}`));
        }
        callback(null);
    });
};

// addStaff({
//     name: "Huy",
//     gender: 1,
//     birthdate: "11/01/2024",
//     phone: "0123456788",
//     address: "Hà Nội",
//     email: "huy@gmail.com",
//     password: "123456",
    

// }, (err) => {
//     if (err) {
//         console.error("Lỗi khi thêm nhân viên:", err);
//     } else {
//         console.log("Thêm nhân viên thành công!");
//     }
// });

// Hàm lấy thông tin nhân viên theo ID
const getStaffById = (id, callback) => {
    const sql = `SELECT * FROM staffs WHERE id = ?`;
    db.query(sql, [id], (err, results) => {
        if (err) return callback(err);

        if (results.length > 0) {
            const staff = results[0];
            // Format the birthdate to YYYY-MM-DD
            staff.birthdate = formatDate(staff.birthdate);
            callback(null, staff);
        } else {
            callback(null, null);
        }
    });
};

// Hàm cập nhật thông tin nhân viên
const updateStaff = (id, { name, gender, birthdate, phone, address, email, password, level }, callback) => {
    const genderValue = parseInt(gender);

    const sql = `UPDATE staffs SET name = ?, gender = ?, birthdate = ?, phone = ?, address = ?, email = ?, password = ?, level = ? WHERE id = ?`;
    db.query(sql, [name, gender, birthdate, phone, address, email, password, level, id], (err) => {
        if (err) return callback(err);
        callback(null);
    });
};

// Hàm xóa nhân viên
const deleteStaff = (id, callback) => {
    const sql = `DELETE FROM staffs WHERE id = ?`;
    db.query(sql, [id], (err) => {
        if (err) return callback(err);
        callback(null);
    });
};

module.exports = {
    getAllStaffs,
    addStaff,
    getStaffById,
    updateStaff,
    deleteStaff,
};

