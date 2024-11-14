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

const searchProducts = (req, res) => {
    const query = req.query.query;
    const searchHistory = req.session.searchHistory || [];
    
    productModel.searchProducts(query, (err, products) => {
        if (err) {
            return res.status(500).send('Lỗi khi tìm kiếm sản phẩm');
        }

        if(!searchHistory.includes(query)) {
            searchHistory.push(query);
        }
    
        req.session.searchHistory = searchHistory;

        res.render('customer/search', { products, query });
    });
};

const getProductDetails = (req, res) => {
    const productId = req.params.id;

    productModel.getProductById(productId, (err, product) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy dữ liệu sản phẩm');
        }

        if (!product) {
            return res.status(404).send('Sản phẩm không tồn tại');
        }

        res.render('customer/product', { product });
    });
};

const getProductsByCategory = (req, res) => {
    const categoryId = req.params.id;

    productModel.getProductsByCategory(categoryId, (err, products) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy dữ liệu sản phẩm');
        }

        categoryModel.getCategoryById(categoryId, (err, category) => {
            if (err) {
                return res.status(500).send('Lỗi khi lấy dữ liệu danh mục');
            }

            res.render('customer/categoryProduct', { products, category });
        })

    });
};



module.exports = {
    getProductsAndCategories,
    searchProducts,
    getProductDetails,
    getProductsByCategory
};