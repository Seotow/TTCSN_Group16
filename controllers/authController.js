const userModel = require('../models/userModel');

const login = (req, res) => {
    // Validate định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.json({ success: false, message: 'Email không hợp lệ' });
    }
    
    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        return res.json({ success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự' });
    }

    // Kiểm tra mật khẩu có ít nhất một chữ cái
    const hasLetter = /[a-zA-Z]/.test(password);
    if (!hasLetter) {
        return res.json({ success: false, message: 'Mật khẩu phải chứa ít nhất một chữ cái' });
    }

    // Kiểm tra mật khẩu có ít nhất một số
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
        return res.json({ success: false, message: 'Mật khẩu phải chứa ít nhất một số' });
    }

    // Kiểm tra mật khẩu có ít nhất một ký tự đặc biệt
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialChar) {
        return res.json({ success: false, message: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt' });
    }


    userModel.getUserByEmailAndPassword(email, password, (err, user) => {
        if (err) {
            return res.json({ success: false, message: 'Có lỗi xảy ra, vui lòng thử lại sau'});
        }
        if (!user) {
            return res.json({ success: false, message: 'Email hoặc mật khẩu không chính xác' });
        }

        req.session.user = {
            id: user.id,
            name: user.name
        };

        if (rememberMe) {
            req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
        } else {
            req.session.cookie.expires = false; // Session cookie
        }

        req.session.message = {
            type: 'success',
            text: 'Đăng nhập thành công'
        };

        return res.json({ success: true, message: 'Đăng nhập thành công'});
    });
};

const logout = (req, res) => {
    delete req.session.user;
    req.session.message = {
        type: 'success',
        text: 'Đăng xuất thành công'
    }
    res.redirect('/');

};

const register = (req, res) => {
    const { name, phone, email, password } = req.body;

    // Kiểm tra xem tất cả các trường có được cung cấp không
    if (!name || !phone || !email || !password) {
        return res.json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin'});
    }

    // Kiểm tra mật khẩu nhập lại
    if (password !== confirmPassword) {
        return res.json({ success: false, message: 'Mật khẩu nhập lại không khớp' });
    }

    // Validate định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.json({ success: false, message: 'Email không hợp lệ' });
    }

    // Validate số điện thoại (chỉ số, 9-11 số)
    const phoneRegex = /^\d{9,11}$/;
    if (!phoneRegex.test(phone)) {
        return res.json({ success: false, message: 'Số điện thoại không hợp lệ' });
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        return res.json({ success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự' });
    }

    // Kiểm tra mật khẩu có ít nhất một chữ cái
    const hasLetter = /[a-zA-Z]/.test(password);
    if (!hasLetter) {
        return res.json({ success: false, message: 'Mật khẩu phải chứa ít nhất một chữ cái' });
    }

    // Kiểm tra mật khẩu có ít nhất một số
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
        return res.json({ success: false, message: 'Mật khẩu phải chứa ít nhất một số' });
    }

    // Kiểm tra mật khẩu có ít nhất một ký tự đặc biệt
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialChar) {
        return res.json({ success: false, message: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt' });
    }


    userModel.getUserByEmailOrPhone(email, phone, (err, exists) => {
        if (err) {
            return res.json({ success: false, message: 'Có lỗi xảy ra, vui lòng thử lại sau'});
        }
        if (exists) {
            return res.json({ success: false, message: 'Email hoặc số điện thoại đã tồn tại'});
        }

        // Lưu mật khẩu trực tiếp (không băm)
        userModel.createUser(name, phone, email, password, (err) => {
            if (err) {
                return res.json({ success: false, message: 'Đã xảy ra lỗi khi tạo tài khoản'});
            }
            req.session.message = { type: 'success', text: 'Đăng ký thành công' };
            return res.json({ success: true, message: 'Đăng ký thành công'});
        });
    });
};

module.exports = {
    login,
    logout,
    register,
};