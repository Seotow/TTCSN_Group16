const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const checkoutController = require('../controllers/checkoutController');

// Xem và tìm kiếm sản phẩm
router.get('/', productController.getProductsAndCategories);

// Giỏ hàng
router.post('/add-to-cart', cartController.addToCart);
router.get('/cart', cartController.getCartProducts);
router.post('/update-cart-quantity', cartController.updateCartQuantity);
router.post('/delete-cart-item', cartController.deleteCart);

//Thanh toán
router.post('/checkout', checkoutController.processCheckout);

module.exports = router;