const db = require('../config/db');

// Hàm lấy chi tiết hóa đơn dựa trên bill_id
const getBillDetailsById = (billId, callback) => {
    const sql = `
        SELECT 
            PRODUCTS.image,
            PRODUCTS.name,
            PRODUCTS.price,
            DETAILS_BILLS.quantity,
            (PRODUCTS.price * DETAILS_BILLS.quantity) AS total_price
        FROM DETAILS_BILLS
        JOIN PRODUCTS ON DETAILS_BILLS.product_id = PRODUCTS.id
        WHERE DETAILS_BILLS.bill_id = ?
    `;
    db.query(sql, [billId], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

// Hàm lấy thông tin tổng quan của hóa đơn từ bảng BILLS
const getBillById = (billId, callback) => {
    const sql = `
        SELECT 
            id,
            receiver_name,
            receiver_phone,
            receiver_address,
            note,
            created_at,
            status,
            total_price
        FROM BILLS
        WHERE id = ?
    `;
    db.query(sql, [billId], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result[0]);
    });
};

// Hàm lấy tất cả hóa đơn từ bảng BILLS
const getAllBills = (callback) => {
    const sql = `
        SELECT 
            id,
            receiver_name,
            receiver_phone,
            receiver_address,
            note,
            created_at,
            status,
            total_price
        FROM BILLS
    `;
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

// Hàm cập nhật trạng thái hóa đơn
const updateBillStatus = (billId, status, callback) => {
    const sql = `
        UPDATE BILLS 
        SET status = ?
        WHERE id = ?
    `;
    db.query(sql, [status, billId], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

module.exports = {
    getAllBills,
    getBillDetailsById,
    getBillById,
    updateBillStatus
};
