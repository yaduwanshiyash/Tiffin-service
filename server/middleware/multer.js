const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinaryConfig');

// Set up Cloudinary storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'providers', // Folder in Cloudinary to store images
    allowed_formats: ['jpeg', 'jpg', 'png', 'gif', 'webp', 'avif']
  }
});

// Initialize upload middleware
const upload = multer({ storage: storage });

module.exports = upload;
