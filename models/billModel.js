const db = require('../config/db'); // Include your database connection

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

module.exports = {
    createBill,
    createBillDetails
};