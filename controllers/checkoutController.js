const productModel = require('../models/productModel')
const billModel = require('../models/billModel')

const processCheckout = (req, res) => {
    const { receiver_name, receiver_phone, receiver_address, note, cartItems } = req.body;

    // Check if receiver infor are valid
    if (!receiver_name || !receiver_phone || !receiver_address) {
        return res.json({ success: false, message: 'Vui lòng điền đầy đủ thông tin' });
    }

    const customer_id = req.session.user.id;
    if (cartItems.length === 0) {
        return res.json({ success: false, message: 'Giỏ hàng trống' });
    }

    // Get product details from the database
    const productIds = cartItems.map(item => item.productId);

    productModel.getProductsByIds(productIds, (err, products) => {
        if (err) {
            return res.json({ success: false, message: 'Lỗi khi lấy dữ liệu sản phẩm' });
        }

        // Check if any buyQuantity exceeds available quantity
        const productMap = {};
        products.forEach(product => {
            productMap[product.id] = product;
        });

        for (const item of cartItems) {
            if (item.buyQuantity > productMap[item.productId].quantity) {
                return res.json({ success: false, message: `Số lượng sản phẩm ${productMap[item.productId].name} không đủ` });
            }
        }

        // Calculate total price
        let total_price = 0;
        cartItems.forEach(item => {
            total_price += productMap[item.productId].price * item.buyQuantity;
        });

        // Insert into bill table
        billModel.createBill(customer_id, receiver_name, receiver_phone, receiver_address, note, total_price, (err, bill_id) => {
            if (err) {
                return res.json({ success: false, message: 'Lỗi khi tạo hóa đơn' });
            }

            // Insert into details_bills table
            billModel.createBillDetails(bill_id, cartItems, (err) => {
                if (err) {
                    return res.json({ success: false, message: 'Lỗi khi tạo chi tiết hóa đơn' });
                }

                // Clear the cart
                req.session.cart = [];
                req.session.message = { type: 'success', text: 'Hóa đơn đã đưa vào trạng thái chờ duyệt!' };

                res.json({ success: true, message: 'Hóa đơn đã đưa vào trạng thái chờ duyệt!' });
            });
        });
    });
};

module.exports = {
    processCheckout
};