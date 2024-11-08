const userModel = require('../models/userModel')
const productModel = require('../models/productModel')

const getCartProducts = (req, res) => {
    if (!req.session.user) {
        req.session.message = { type: 'error', text: 'Vui lòng đăng nhập' };
        return res.redirect('/');
    }

    const cart = req.session.cart || [];
    const userId = req.session.user ? req.session.user.id : null;

    if (!userId) {
        return res.redirect('/');
    }

    userModel.getUserById(userId, (err, user) => {
        if (err) {
            return res.status(500).send('Lỗi lấy dữ liệu người dùng');
        }

        productModel.getAllProducts((err, products) => {
            if (err) {
                return res.status(500).send('Lỗi lấy dữ liệu sản phẩm');
            }

            // Filter products that are in the cart
            const cartProducts = products.filter(product => 
                cart.some(cartItem => cartItem.productId == product.id)
            );

            res.render('customer/cart_view_all', { user, cartProducts });
        });
    });
}

const addToCart = (req, res) => {
    const { productId, name, image, price, quantity } = req.body
    const buyQuantity = parseInt(req.body.buyQuantity) || 1;
    if (!req.session.cart) {
        req.session.cart = [];
    }
    
    // Sản phẩm đã có
    const cartItem = req.session.cart.find(item => item.productId === productId);

    if (cartItem) {
        cartItem.buyQuantity += buyQuantity;
    } else {
        req.session.cart.push({ productId, name, image, price, quantity, buyQuantity });
    }

    return res.json({ success: true, cart: req.session.cart });
}

const updateCartQuantity = (req, res) => {
    const { index, type } = req.body;
    if (req.session.cart && req.session.cart[index]) {
        if (type === 'increase') {
            req.session.cart[index].buyQuantity += 1;
        } else if (type === 'decrease' && req.session.cart[index].buyQuantity > 1) {
            req.session.cart[index].buyQuantity -= 1;
        }
        res.json({ success: true, newQuantity: req.session.cart[index].buyQuantity });
    } else {
        res.json({ success: false, message: 'Lỗi khi cập nhật số lượng'});
    }
}

const deleteCart = (req, res) => {
    const { index } = req.body;
    if (req.session.cart && req.session.cart[index]) {
        req.session.cart.splice(index, 1);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
}

module.exports = {
    getCartProducts,
    addToCart,
    updateCartQuantity,
    deleteCart
}