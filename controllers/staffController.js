const staffModel = require('../models/staffModel');

// Lấy danh sách nhân viên
const getStaffs = (req, res) => {
    // Lấy danh sách nhân viên từ model
    staffModel.getAllStaffs((err, staffs) => {
        if (err) {
            return res.status(500).send('Lỗi lấy dữ liệu nhân viên');
        }
        
        // Render ra trang quản lý nhân viên với danh sách nhân viên
        res.render('admin/staffs', { staffs });
    });
};

// Hàm xử lý yêu cầu xóa nhân viên
exports.deleteStaff = (req, res) => {
    const staffId = req.params.id; // Lấy ID từ tham số URL

    staffModel.deleteStaff(staffId, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Có lỗi xảy ra khi xóa tài khoản.');
        }
        // Chuyển hướng về trang danh sách nhân viên sau khi xóa thành công
        res.redirect('/admin/staffs');
    });
};

module.exports = {
    getStaffs
};
