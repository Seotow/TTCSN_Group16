const adminModel = require('../models/adminModel');

const showAdminLoginForm = (req, res) => {
    if (!req.session.admin) {
        return res.render('admin/index'); 
    }
    res.redirect('admin/dashboard'); 
};

const login = (req, res) => {
    const { email, password } = req.body;

    adminModel.getAdminByEmailAndPassword(email, password, (err, admin) => {
        if (err) return res.status(500).send('Đã xảy ra lỗi');
        // Lưu thông tin admin vào session
        req.session.admin = { id: admin.id, name: admin.name, level: admin.level };
        res.redirect('/admin/dashboard');
    });
}

const logout = (req, res) => {
    delete req.session.admin
    res.redirect('/admin')
}

module.exports = {
    showAdminLoginForm,
    login,
    logout
}