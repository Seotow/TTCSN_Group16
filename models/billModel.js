const db = require('../config/db');

// Hàm lấy chi tiết hóa đơn dựa trên bill_id
const getBillDetailsById = (billId, callback) => {
    const sql = `
        SELECT 
            product_id,
            PRODUCTS.image,
            PRODUCTS.name,
            PRODUCTS.price,
            DETAILS_BILLS.quantity
        FROM DETAILS_BILLS
        JOIN PRODUCTS ON DETAILS_BILLS.product_id = PRODUCTS.id
        WHERE bill_id = ?
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

const getBillsByUserId = (userId, statusFilter, callback) => {
    let sql = `SELECT * FROM bills WHERE customer_id = ?`;
    const params = [userId];

    if (statusFilter) {
        sql += ` AND status = ?`;
        params.push(statusFilter);
    }

    sql += ` ORDER BY created_at DESC`;

    db.query(sql, params, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
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
        ORDER BY FIELD(status, 0, 1, -1), created_at DESC
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
    })
}
const createBill = (customer_id, receiver_name, receiver_phone, receiver_address, note, total_price, callback) => {
    //Create bill, set default status to 0 (pending)
    const billQuery = `INSERT INTO bills (customer_id, receiver_name, receiver_phone, receiver_address, note, status, total_price) VALUES (?, ?, ?, ?, ?, 0, ?)`;
    db.query(billQuery, [customer_id, receiver_name, receiver_phone, receiver_address, note, total_price], (err, result) => {
        if (err) {
            console.log(err)
            return callback(err);
        }
        callback(null, result.insertId);
    });
};

const createBillDetails = (bill_id, cartItems, callback) => {
    const detailsBillsQuery = `INSERT INTO details_bills (bill_id, product_id, quantity) VALUES ?`;
    const detailsBillsValues = cartItems.map(item => [bill_id, item.productId, item.buyQuantity]);
    db.query(detailsBillsQuery, [detailsBillsValues], (err) => {
        if (err) {
            console.log(err)
            return callback(err);
        }
        callback(null);
    });
};

const getBillDetails = (billId, callback) => {
    const sql = `SELECT * FROM details_bills WHERE bill_id = ?`;
    db.query(sql, [billId], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

module.exports = {
    getAllBills,
    getBillDetailsById,
    getBillById,
    getBillsByUserId,
    updateBillStatus,
    createBill,
    createBillDetails,
    getBillDetails
};
   
