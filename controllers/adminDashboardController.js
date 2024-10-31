const productModel = require('../models/productModel')
const categoryModel = require('../models/categoryModel')
const manufacturerModel = require('../models/manufacturerModel')

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


module.exports = {
    showDashboard,
    getCategoryAndManufacturer,
    showProducts,
    addProduct,
    showEditProductForm,
    editProduct,
    deleteProduct,
    uploadProduct,
    uploadCategory
}