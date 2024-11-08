const productModel = require('../models/productModel')
const categoryModel = require('../models/categoryModel')
const manufacturerModel = require('../models/manufacturerModel')
const staffModel = require('../models/staffModel')
const billModel = require('../models/billModel');

const fs = require('fs')
const multer = require('multer');
const path = require('path');

// Storage for products
const productStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const categoryStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/categories');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


const uploadProduct = multer({ storage: productStorage });
const uploadCategory = multer({ storage: categoryStorage });


const showDashboard = (req, res) => {
    res.render('admin/dashboard')
}

// Hiển thị danh sách sản phẩm
const showProducts = (req, res) => {
    productModel.getDetailsAllProducts((err, products) => {
        if (err) return res.status(500).send('Lỗi kết nối cơ sở dữ liệu');
        res.render('admin/products/index', { products });
    });
};

// Hiển thị form thêm sản phẩm
const getCategoryAndManufacturer = (req, res) => {
    categoryModel.getAllCategories((err, categories) => {
        if(err) return res.status(500).send('Lỗi láy dữ liệu danh mục');

        manufacturerModel.getAllManufacturers((err, manufacturers) => {
            if(err) return res.status(500).send('Lỗi lấy dữ liệu nhà cung cấp')
            
            res.render('admin/products/addProduct', { categories, manufacturers})
        })
    }) 
}

const addProduct = (req, res) => {
    const { name, description, price, quantity, manufacturer_id, category_id } = req.body;
    const image = req.file ? req.file.filename : null; 
    productModel.addProduct({ name, description, image, price, quantity, manufacturer_id, category_id }, (err) => {
        if (err) return res.status(500).send('Lỗi khi thêm sản phẩm');
        res.redirect('/admin/products');
    });
};

const showEditProductForm = (req, res) => {
    const { id } = req.params;
    productModel.getProductById(id, (err, product) => {
        if (err) return res.status(500).send('Lỗi khi lấy thông tin sản phẩm');
        if (!product) return res.status(404).send('Sản phẩm không tồn tại');

        categoryModel.getAllCategories((err, categories) => {
            if (err) return res.status(500).send('Lỗi khi lấy thông tin danh mục')

            manufacturerModel.getAllManufacturers((err, manufacturers) => {
                if (err) return res.status(500).send('Lỗi khi lấy thông tin nhà sản xuất')

                res.render('admin/products/editProduct', { product, categories, manufacturers })
            })
        })
        
    });
};

const editProduct = (req, res) => {
    const { id } = req.params
    const { name, description, price, quantity, manufacturer_id, category_id, image_old } = req.body
    const image_new = req.file ? req.file.filename : null;


    // If a new image is uploaded, delete the old image
    if (image_new) {
        const oldImagePath = path.join(__dirname, '../public/images/products', image_old);
        fs.unlink(oldImagePath, (err) => {
            if (err) console.error('Lỗi khi xóa hình ảnh cũ:', err);
        });
    }

    const image = image_new || image_old;

    productModel.updateProduct(id, { name, description, price, quantity, manufacturer_id, category_id, image }, (err) => {
        if (err) return res.status(500).send('Lỗi khi cập nhật sản phẩm');
        res.redirect('/admin/products');
    });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    productModel.deleteProduct(id, (err) => {
        if (err) return res.status(500).send('Lỗi khi xóa sản phẩm');
        res.redirect('/admin/products');
    });
};

// Hiển thị danh sách nhân viên
const showStaffs = (req, res) => {
    staffModel.getAllStaffs((err, staffs) => {
        if (err) return res.status(500).send('Lỗi kết nối cơ sở dữ liệu');
        res.render('admin/staffs/index', { staffs });
    });
};

// Hiển thị form thêm nhân viên
const getAddStaffForm = (req, res) => {
    res.render('admin/staffs/addStaff');
};

// Thêm nhân viên
const addStaff = (req, res) => {
    const { name, gender, birthdate, phone, address, email, password, level } = req.body;

    // Chuyển gender thành số nguyên
    const genderValue = parseInt(gender);

    staffModel.addStaff({ name, gender: genderValue, birthdate, phone, address, email, password, level }, (err) => {
        if (err) return res.status(500).send('Lỗi khi thêm nhân viên' +err.message);
        res.redirect('/admin/staffs');
    });
};

// Hiển thị form sửa thông tin nhân viên
const showEditStaffForm = (req, res) => {
    const { id } = req.params;
    staffModel.getStaffById(id, (err, staff) => {
        console.log(staff)
        if (err) return res.status(500).send('Lỗi khi lấy thông tin nhân viên');
        if (!staff) return res.status(404).send('Nhân viên không tồn tại');

        // Chuyển đổi giá trị gender thành Nam/Nữ
        staff.genderText = staff.gender === 0 ? 'Nữ' : 'Nam';

        res.render('admin/staffs/editStaff', { staff });
    });
};

// Cập nhật thông tin nhân viên
const editStaff = (req, res) => {
    const { id } = req.params;
    const { name, gender, birthdate, phone, address, email, password } = req.body;
    const staffData = { name, gender, birthdate, phone, address, email, password };

    staffModel.updateStaff(id, staffData, (err) => {
        console.log(err);
        if (err) return res.status(500).send('Lỗi khi cập nhật thông tin nhân viên');
        res.redirect('/admin/staffs');
    });
};

// Xóa nhân viên
const deleteStaff = (req, res) => {
    const { id } = req.params;
    staffModel.deleteStaff(id, (err) => {
        if (err) return res.status(500).send('Lỗi khi xóa nhân viên');
        res.redirect('/admin/staffs');
    });
};


// Hiển thị danh sách thể loại
const showCategories = (req, res) => {
    categoryModel.getAllCategories((err, categories) => {
        if (err) return res.status(500).send('Lỗi kết nối cơ sở dữ liệu');
        res.render('admin/categories/index', { categories });
    });
};

// Hiển thị form thêm thể loại
const getAddCategoryForm = (req, res) => {
    res.render('admin/categories/addCategory');
};

// Thêm thể loại
const addCategory = (req, res) => {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : null; 

    categoryModel.addCategory({ name, description, image }, (err) => {
        if (err) return res.status(500).send('Lỗi khi thêm thể loại');
        res.redirect('/admin/categories');
    });
};

// Hiển thị form chỉnh sửa thể loại
const showEditCategoryForm = (req, res) => {
    const { id } = req.params;
    categoryModel.getCategoryById(id, (err, category) => {
        if (err) return res.status(500).send('Lỗi khi lấy thông tin thể loại');
        if (!category) return res.status(404).send('Thể loại không tồn tại');
        res.render('admin/categories/editCategory', { category });
    });
};

// Chỉnh sửa thể loại
const editCategory = (req, res) => {
    const { id } = req.params;
    const { name, description, image_old } = req.body;
    const image_new = req.file ? req.file.filename : null;

    // Nếu có ảnh mới thì xóa ảnh cũ
    if (image_new) {
        const oldImagePath = path.join(__dirname, '../public/images/categories', image_old);
        fs.unlink(oldImagePath, (err) => {
            if (err) console.error('Lỗi khi xóa hình ảnh cũ:', err);
        });
    }

    const image = image_new || image_old;

    categoryModel.updateCategory(id, { name, description, image }, (err) => {
        if (err) return res.status(500).send('Lỗi khi cập nhật thể loại');
        res.redirect('/admin/categories');
    });
};

// Xóa thể loại
const deleteCategory = (req, res) => {
    const { id } = req.params;
    categoryModel.deleteCategory(id, (err) => {
        if (err) return res.status(500).send('Lỗi khi xóa thể loại');
        res.redirect('/admin/categories');
    });
};



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
    const billId = req.params.id;

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

            res.render('admin/billDetails', {
                bill,
                details
            });
        });
    });
};

// Controller xử lý duyệt đơn hàng
const approveBill = (req, res) => {
    const billId = req.params.id;

    billModel.updateBillStatus(billId, 'Đã duyệt', (err) => {
        if (err) {
            console.error('Lỗi khi duyệt đơn:', err);
            return res.status(500).send('Đã xảy ra lỗi khi duyệt đơn');
        }
        req.flash('success', 'Duyệt đơn thành công');
        res.redirect('/admin/bills');
    });
};

// Controller xử lý hủy đơn hàng
const cancelBill = (req, res) => {
    const billId = req.params.id;

    billModel.updateBillStatus(billId, 'Đã hủy', (err) => {
        if (err) {
            console.error('Lỗi khi hủy đơn:', err);
            return res.status(500).send('Đã xảy ra lỗi khi hủy đơn');
        }
        req.flash('success', 'Hủy đơn thành công');
        res.redirect('/admin/bills');
    });
};



// Xuất các hàm cho sử dụng trong các tệp khác
module.exports = {
    showDashboard,
    getCategoryAndManufacturer,
    showProducts,
    addProduct,
    showEditProductForm,
    editProduct,
    deleteProduct,
    uploadProduct,
    uploadCategory,
    showStaffs,
    getAddStaffForm,
    addStaff,
    showEditStaffForm,
    editStaff,
    deleteStaff,
    showCategories, 
    getAddCategoryForm, 
    addCategory,  
    showEditCategoryForm,  
    editCategory,  
    deleteCategory,
    showBills,
    showBillDetails,
    approveBill,
    cancelBill 
};


