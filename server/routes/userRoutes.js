const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, deleteUserProfile } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const User = require('../models/User');
const Product = require('../models/Product');

// Define routes
router.get('/:id', authMiddleware, getUserProfile);
router.put('/:id', authMiddleware, updateUserProfile);
router.delete('/:id', authMiddleware, deleteUserProfile);
router.get('/profile', authMiddleware, getUserProfile);


  

module.exports = router;
