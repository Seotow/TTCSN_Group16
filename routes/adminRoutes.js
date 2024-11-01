const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');
const adminDashboardController = require('../controllers/adminDashboardController');
const productController = require('../controllers/productController');
const staffController = require('../controllers/staffController');

//Middleware
function checkSession(req, res, next) {
    // if (!req.session.admin) {
    //     return res.redirect('/admin'); // Redirect to home page if no session
    // }
    next();
}

//Admin auth
router.get('/', adminAuthController.showAdminLoginForm);
router.get('/dashboard', adminDashboardController.showDashboard)
router.post('/login', adminAuthController.login);
router.get('/logout', adminAuthController.logout);

//Admin product management
router.get('/products', adminDashboardController.showProducts);
router.get('/products/add', adminDashboardController.getCategoryAndManufacturer);
router.post('/products/add', adminDashboardController.uploadProduct.single('image'), adminDashboardController.addProduct);
router.get('/products/edit/:id', adminDashboardController.showEditProductForm);
router.post('/products/edit/:id', adminDashboardController.uploadProduct.single('image_new'), adminDashboardController.editProduct);
router.post('/products/delete/:id', adminDashboardController.deleteProduct);

// Admin account management
router.get('/staffs', adminDashboardController.showStaffs); 
router.get('/staffs/add', adminDashboardController.getAddStaffForm);
router.post('/staffs/add', adminDashboardController.addStaff); 
router.get('/staffs/edit/:id', adminDashboardController.showEditStaffForm); 
router.post('/staffs/edit/:id', adminDashboardController.editStaff); 
router.post('/staffs/delete/:id', adminDashboardController.deleteStaff); 

module.exports = router;
