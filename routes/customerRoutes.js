const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const checkoutController = require('../controllers/checkoutController');
const billController = require('../controllers/billController')
const userController = require('../controllers/userController')
const PaymentController = require("../controllers/paymentControler")


let paymentController = new PaymentController()


function checkUserSession(req, res, next) {
    if (!req.session.user) {
        req.session.message = { type: 'error', text: "Vui lòng đăng nhập trước khi thực hiện chức năng" }
        return res.redirect('/'); // Redirect to home page if no session
    }
    next();
}

// Xem và tìm kiếm sản phẩm
router.get('/', productController.getProductsAndCategories);
router.get('/search', productController.searchProducts);
router.get('/product/:id', productController.getProductDetails);
router.get('/category/:id', productController.getProductsByCategory);

// Giỏ hàng
router.post('/add-to-cart', cartController.addToCart);
// router.use(checkUserSession); // check user session
router.get('/cart', cartController.getCartProducts);
router.post('/update-cart-quantity', cartController.updateCartQuantity);
router.post('/delete-cart-item', cartController.deleteCart);

//Thanh toán
router.post('/checkout', checkoutController.processCheckout);

// Hóa đơn
router.get('/bills', billController.viewAllBills)
router.post('/bills/cancel/:id', billController.cancelBill);

// Thông tin user
router.get('/user', userController.viewUserInfo);
router.post('/user/update', userController.updateUserInfo);
router.post('/user/update-password', userController.updateUserPassword);

//transaction
router.post("/createPaymentLink", paymentController.createPaymentLink)
router.post("/checkPayment", paymentController.checkPayment)


module.exports = router;