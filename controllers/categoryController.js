const categoryModel = require('../models/categoryModel');

// Lấy danh sách thể loại
const getCategories = (req, res) => {
    // Lấy danh sách thể loại từ model
    categoryModel.getAllCategories((err, categories) => {
        if (err) {
            return res.status(500).send('Lỗi lấy dữ liệu thể loại');
        }
        
        // Render ra trang quản lý thể loại với danh sách thể loại
        res.render('admin/categories', { categories });
    });
};

module.exports = {
    getCategories,
};
