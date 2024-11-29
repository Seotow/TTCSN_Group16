const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');
const adminDashboardController = require('../controllers/adminDashboardController');
const productController = require('../controllers/productController');
const staffController = require('../controllers/staffController');
const billController = require('../controllers/billController'); 

//Middleware
function checkAdminSession(req, res, next) {
    if (!req.session.admin) {
        return res.redirect('/admin'); // Redirect to home page if no session
    }
    next();
}


//Admin auth
router.get('/', adminAuthController.showAdminLoginForm);
router.post('/login', adminAuthController.login);
router.get('/logout', adminAuthController.logout);
router.use(checkAdminSession);
router.get('/dashboard', adminDashboardController.showDashboard)

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

// Admin category management
router.get('/categories', adminDashboardController.showCategories); 
router.get('/categories/add', adminDashboardController.getAddCategoryForm); 
router.post('/categories/add', adminDashboardController.uploadCategory.single('image'), adminDashboardController.addCategory);  
router.get('/categories/edit/:id', adminDashboardController.showEditCategoryForm);
router.post('/categories/edit/:id', adminDashboardController.uploadCategory.single('image_new'), adminDashboardController.editCategory);  
router.post('/categories/delete/:id', adminDashboardController.deleteCategory);  

// Admin bill management (Quản lý đơn hàng)
router.get('/bills', adminDashboardController.showBills);
router.get('/bills/:id', adminDashboardController.showBillDetails);
router.get('/bills/details/:id', adminDashboardController.showBillDetails);
router.post('/bills/approve/:id', adminDashboardController.approveBill);
router.post('/bills/cancel/:id', adminDashboardController.cancelBill);

module.exports = router;
