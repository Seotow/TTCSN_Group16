const userModel = require('../models/userModel');

const login = (req, res) => {
    const { email, password } = req.body;

    userModel.getUserByEmailAndPassword(email, password, (err, user) => {
        if (err) {
            return res.status(500).json({ status: 500, message: 'Đã xảy ra lỗi' });
        }
        if (!user) {
            return res.status(401).json({ status: 401, message: 'Email hoặc mật khẩu không chính xác'});
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

const register = (req, res) => {
    const { name, phone, email, password } = req.body;

    // Kiểm tra xem tất cả các trường có được cung cấp không
    if (!name || !phone || !email || !password) {
        return res.status(400).json({ message: 'Tất cả các trường là bắt buộc' });
    }

    console.log(req.body);
    
    userModel.getUserByEmailOrPhone(email, phone, (err, exists) => {
        if (err) {
            return res.status(500).json({ message: 'Đã xảy ra lỗi' });
        }
        if (exists) {
            return res.status(409).json({ message: 'Email hoặc Số điện thoại đã tồn tại' });
        }

        // Lưu mật khẩu trực tiếp (không băm)
        userModel.createUser(name, phone, email, password, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo tài khoản' });
            }
            res.redirect('/');
        });
    });
};

module.exports = {
    login,
    logout,
    register
};