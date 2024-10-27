const userModel = require('../models/userModel');

const login = (req, res) => {
    const { email, password } = req.body;

    userModel.getUserByEmailAndPassword(email, password, (err, user) => {
        if (err) {
            return res.status(500).json({ status: 500, message: 'Đã xảy ra lỗi' });
        }
        if (!user) {
            return res.status(401).json({ status: 401, message: 'Email hoặc mật khẩu không chính xác '});
        }

        req.session.user = {
            id: user.id,
            name: user.name
        };

        return res.status(200).json({ status: 200, message: 'Đăng nhập thành công'});

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
