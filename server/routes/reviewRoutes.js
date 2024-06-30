// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const { createReview, getReviewsByProvider, getReviewById } = require('../controllers/reviewController');

// Create a new review
router.post('/providers/:providerId/reviews', createReview);

// Get all reviews for a provider
router.get('/providers/:providerId/reviews', getReviewsByProvider);

// Get a single review by ID
router.get('/reviews/:reviewId', getReviewById);

module.exports = router;
