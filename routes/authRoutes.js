const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Health check endpoint for deployment platforms
router.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/register', authController.register);

module.exports = router;