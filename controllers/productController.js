const productModel = require('../models/productModel');
const categoryModel = require('../models/categoryModel');

// Trang chính cho khách hàng
const getProductsAndCategories = (req, res) => {
    // Lấy danh sách sản phẩm
    productModel.getAllProducts((err, products) => {
        if (err) {
            return res.status(500).send('Lỗi lấy dữ liệu sản phẩm');
        }
        // Lấy danh sách danh mục
        categoryModel.getAllCategories((err, categories) => {
            if (err) {
                return res.status(500).send('Lỗi lấy dữ liệu danh mục');
            }
            // Render ra trang index với cả sản phẩm và danh mục
            res.render('customer/index', { products, categories });
        });
    });
};

module.exports = {
    getProductsAndCategories
};