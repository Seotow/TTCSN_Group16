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

    // Validate tên không được rỗng
    if (!name || !name.trim()) {
        return res.json({ success: false, message: 'Tên không được để trống' });
    }

    // Validate địa chỉ không rỗng
    if (!address || !address.trim()) {
        return res.json({ success: false, message: 'Địa chỉ không được để trống' });
    }

    // Validate gender
    const validGenders = [0, 1];
    if (gender !== undefined && gender !== null && !validGenders.includes(Number(gender))) {
        return res.json({ success: false, message: 'Hãy chọn giới tính phù hợp' });
    }

    // Validate số điện thoại
    const phoneRegex = /^\d{9,11}$/;
    if (!phoneRegex.test(phone)) {
        return res.json({ success: false, message: 'Số điện thoại phải từ 9-11 số và không chứa ký tự khác' });
    }

    // Validate năm sinh không được lớn hơn năm hiện tại
    if (birthdate) {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();
        if (birthDate > currentDate) {
            return res.json({ success: false, message: 'Ngày sinh không được lớn hơn ngày hiện tại' });
        }
    }

    userModel.updateUserInforById(userId, { name, gender, birthdate, phone, address }, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật thông tin người dùng');
        }

        return res.json({ success: true, message: 'Cập nhật thông tin cá nhân thành công' });
    });
};

const updateUserPassword = (req, res) => {
    const userId = req.session.user.id;
    const { password, password_confirmation } = req.body;

    // Validate mật khẩu không được rỗng
    if (!password || !password.trim()) {
        return res.json({ success: false, message: 'Mật khẩu không được để trống' });
    }

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