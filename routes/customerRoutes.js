const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Xem và tìm kiếm sản phẩm
router.get('/', productController.getProductsAndCategories);

module.exports = router;