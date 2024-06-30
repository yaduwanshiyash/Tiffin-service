const Provider = require('../models/Provider');
const cloudinary = require('cloudinary').v2;

// Get all providers
const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find().populate('products');
    res.json(providers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single provider by ID
const getProviderById = async (req, res) => {
  const { id } = req.params;

  try {
    const provider = await Provider.findById(id).populate('products');
    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }
    res.json(provider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new provider
const createProvider = async (req, res) => {
  try {
    const { name, description, city, state, country } = req.body;

    // Get file paths from Cloudinary
    const bannerImage = req.files['bannerImage'][0].path;
    const profileImage = req.files['profileImage'][0].path;

    const newProvider = new Provider({
      name,
      description,
      location: { city, state, country },
      bannerImage,
      profileImage
    });

    const savedProvider = await newProvider.save();

    res.status(201).json({ success: true, provider: savedProvider });
  } catch (error) {
    console.error('Error creating provider:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update provider
const updateProvider = async (req, res) => {
  const { id } = req.params;
  const { name, location, rating, description } = req.body;
  let updateFields = { name, location, rating, description };

  try {
    if (req.files) {
      if (req.files.bannerImage) {
        const bannerImageUpload = await cloudinary.uploader.upload(req.files.bannerImage[0].path, {
          folder: 'providers'
        });
        updateFields.bannerImage = bannerImageUpload.secure_url;
      }

      if (req.files.profileImage) {
        const profileImageUpload = await cloudinary.uploader.upload(req.files.profileImage[0].path, {
          folder: 'providers'
        });
        updateFields.profileImage = profileImageUpload.secure_url;
      }
    }

    const updatedProvider = await Provider.findByIdAndUpdate(id, updateFields, { new: true });
    res.json(updatedProvider);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete provider
const deleteProvider = async (req, res) => {
  const { id } = req.params;

  try {
    await Provider.findByIdAndDelete(id);
    res.json({ message: 'Provider deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProviders, getProviderById, createProvider, updateProvider, deleteProvider };
