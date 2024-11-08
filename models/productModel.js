const db = require('../config/db'); 

// Hàm lấy danh sách sản phẩm từ database
const getAllProducts = (callback) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

const getDetailsAllProducts = (callback) => {
    const sql = 
    `SELECT 
        products.*,
        manufacturers.name as manufacturerName,
        categories.name as categoryName
    FROM products
    JOIN manufacturers ON products.manufacturer_id = manufacturers.id
    JOIN categories ON products.category_id = categories.id
    ORDER BY id DESC`;
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
}

const addProduct = ({name, description, image, price, quantity, manufacturer_id, category_id}, callback) => {
    const sql =
    `INSERT INTO products (name, description, image, price, quantity, manufacturer_id, category_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`

    db.query(sql, [name, description, image, price, quantity, manufacturer_id, category_id], (err) => {
        if(err) {
            return callback(err)
        } 
        callback(null);
    });
}

const getProductById = (id, callback) => {
    const sql = `SELECT * FROM products WHERE id = ?`   

    db.query(sql, [id], (err, results) => {
        if(err) return callback(err)
        
        callback(null, results[0])
    })
}

const getProductsByIds = (ids, callback) => {
    const sql = `SELECT * FROM products WHERE id IN (?)`;
    
    db.query(sql, [ids], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const updateProduct = (id, {name, description, image, price, quantity, manufacturer_id, category_id}, callback) => {
    const sql = 
    `UPDATE products
    SET name = ?, description = ?, image = ?, price = ?, quantity = ?, manufacturer_id = ?, category_id = ?
    WHERE id = ?`
    
    db.query(sql, [name, description, image, price, quantity, manufacturer_id, category_id, id], (err) => {
        if (err) return callback(err)
        callback(null)
    })
}

module.exports = {
    getAllProducts,
    getDetailsAllProducts,
    addProduct,
    getProductById,
    getProductsByIds,
    updateProduct
};