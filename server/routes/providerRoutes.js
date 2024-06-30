const express = require('express');
const router = express.Router();
const { getProviders, getProviderById, createProvider, updateProvider, deleteProvider } = require('../controllers/providerController');
const upload = require('../middleware/multer');

// Get all providers
router.get('/', getProviders);

// Get a single provider by ID
router.get('/:id', getProviderById);

// Create a new provider
router.post('/', upload.fields([{ name: 'bannerImage', maxCount: 1 }, { name: 'profileImage', maxCount: 1 }]), createProvider);

// Update a provider
router.put('/:id', upload.fields([{ name: 'bannerImage' }, { name: 'profileImage' }]), updateProvider);

// Delete a provider
router.delete('/:id', deleteProvider);

module.exports = router;
