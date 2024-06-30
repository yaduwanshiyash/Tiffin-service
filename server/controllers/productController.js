const Product = require('../models/Product');

// Get all products for a specific provider
const getProductsByProvider = async (req, res) => {
  const { providerId } = req.params;

  try {
    const products = await Product.find({ provider: providerId });
    if (!products) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id).populate('provider');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new product
const createProduct = async (req, res) => {
  const { name, category, price, subscriptionPlans, provider } = req.body;
  const product = new Product({ name, category, price, subscriptionPlans, provider });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, price, subscriptionPlans, provider } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, category, price, subscriptionPlans, provider }, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProductsByProvider, getProductById, createProduct, updateProduct, deleteProduct };
