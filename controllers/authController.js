const userModel = require('../models/userModel');

const login = (req, res) => {
    const { email, password } = req.body;

    userModel.getUserByEmailAndPassword(email, password, (err, user) => {
        if (err) {
            return res.status(500).json({ status: 500, message: 'Đã xảy ra lỗi' });
        }
        if (!user) {
            return res.status(401).json({ statusbar: 401, message: 'Email hoặc mật khẩu không chính xác '});
        }

        req.session.user = {
            id: user.id,
            name: user.name
        };

        res.redirect('/');

    });
};

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Đã xảy ra lỗi khi đăng xuất');
        }
        res.redirect('/');
    });

};

module.exports  = {
    login,
    logout,
}
