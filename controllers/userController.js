const userModel = require('../models/userModel');

const viewUserInfo = (req, res) => {
    const userId = req.session.user.id;

    userModel.getUserById(userId, (err, user) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy thông tin người dùng');
        }

        res.render('customer/userInfor', { user });
    });
};

const updateUserInfo = (req, res) => {
    const userId = req.params.id;
    const { name, gender, birthdate, phone, address } = req.body;

    userModel.updateUserInforById(userId, { name, gender, birthdate, phone, address }, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật thông tin người dùng');
        }

        return res.json({ success: true, message: 'Cập nhật thông tin cá nhân thành công'});
    });
};

const updateUserPassword = (req, res) => {
    const userId = req.session.user.id;
    const { password, password_confirmation } = req.body;

    if (password !== password_confirmation) {
        return res.json({ success: false, message: 'Mật khẩu mới và xác nhận mật khẩu không khớp' });
    }

    userModel.getUserById(userId, (err, user) => {
        if (err) {
            return res.json({ success: false, message: 'Lỗi khi lấy thông tin người dùng' });
        }

        userModel.updateUserPasswordById(userId, password, (err) => {
            if (err) {
                return res.json({ success: false, message: 'Lỗi khi cập nhật mật khẩu' });
            }

            res.json({ success: true, message: 'Cập nhật mật khẩu người dùng thành công' });
        });
    });
};

module.exports = {
    viewUserInfo,
    updateUserInfo,
    updateUserPassword
};