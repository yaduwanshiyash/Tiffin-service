const express = require('express');
const router = express.Router();
const { getProductsByProvider, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Get all products
router.get('/providers/:providerId/products', getProductsByProvider);

// Get a single product by ID
router.get('/products/:id', getProductById);

// Create a new product
router.post('/products', createProduct);

// Update a product
router.put('/products/:id', updateProduct);

// Delete a product
router.delete('/products/:id', deleteProduct);

module.exports = router;
