const billModel = require('../models/billModel');

// Controller hiển thị danh sách hóa đơn
const showBills = (req, res) => {
    billModel.getAllBills((err, bills) => {
        if (err) {
            console.error('Lỗi khi lấy danh sách hóa đơn:', err);
            return res.status(500).send('Đã xảy ra lỗi khi lấy danh sách hóa đơn');
        }
        res.render('admin/bills', { bills });
    });
};

// Controller hiển thị chi tiết của một hóa đơn
const showBillDetails = (req, res) => {
    const billId = parseInt(req.params.id, 10); // Đảm bảo billId là một số nguyên

    if (isNaN(billId)) {
        return res.status(400).send('ID hóa đơn không hợp lệ');
    }

    // Lấy thông tin hóa đơn từ bảng BILLS
    billModel.getBillById(billId, (err, bill) => {
        if (err) {
            console.error('Lỗi khi lấy thông tin hóa đơn:', err);
            return res.status(500).send('Đã xảy ra lỗi khi lấy thông tin hóa đơn');
        }

        if (!bill) {
            return res.status(404).send('Không tìm thấy hóa đơn');
        }

        // Lấy chi tiết hóa đơn từ bảng DETAILS_BILLS và PRODUCTS
        billModel.getBillDetailsById(billId, (err, details) => {
            if (err) {
                console.error('Lỗi khi lấy chi tiết hóa đơn:', err);
                return res.status(500).send('Đã xảy ra lỗi khi lấy chi tiết hóa đơn');
            }

            res.render('admin/bills/details', {
                bill,
                details
            });
        });
    });
};

// Controller xử lý duyệt đơn hàng
const approveBill = (req, res) => {
    const billId = req.params.id;
    console.log(billId);

    billModel.updateBillStatus(billId, 1, (err) => {
        if (err) {
            console.error('Lỗi khi duyệt đơn:', err);
            return res.status(500).send('Đã xảy ra lỗi khi duyệt đơn');
        }

        // Truyền thông báo thành công qua query params
        res.redirect('/admin/bills?message=duyet-don-thanh-cong');
    });
};

// Controller xử lý hủy đơn hàng
const cancelBill = (req, res) => {
    const billId = req.params.id;

    billModel.updateBillStatus(billId, -1, (err) => {
        if (err) {
            return res.json({ success: false, message: 'Lỗi khi hủy đơn' });
        }
        req.session.message = { type: 'success', text: 'Hủy đơn thành công'};

        res.json({ success: true, message: 'Hủy đơn thành công' });
    });
};

const viewAllBills = async (req, res) => {
    const userId = req.session.user.id;
    const statusFilter = req.query.status;
    
    try {
        const bills = await new Promise((resolve, reject) => {
            billModel.getBillsByUserId(userId, statusFilter, (err, bills) => {
                if (err) {
                    return reject(err);
                }
                resolve(bills);
            });
        });

        const billDetailsPromises = bills.map(bill => {
            return new Promise((resolve, reject) => {
                billModel.getBillDetailsById(bill.id, (err, details) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve({ bill, details });
                });
            });
        });

        const billsWithDetails = await Promise.all(billDetailsPromises);

        res.render('customer/bills', { billsWithDetails });
    } catch (err) {
        console.error('Lỗi khi lấy dữ liệu hóa đơn:', err);
        res.status(500).send('Lỗi khi lấy dữ liệu hóa đơn');
    }
};

module.exports = {
    showBills,
    showBillDetails,
    approveBill,
    cancelBill,
    viewAllBills,
};
