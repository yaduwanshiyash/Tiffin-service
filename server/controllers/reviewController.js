const Review = require('../models/Review');
const Provider = require('../models/Provider');

// Create new review
const createReview = async (req, res) => {
  const { providerId, rating, comment } = req.body;

  try {
    // Check if provider exists
    const provider = await Provider.findById(providerId);
    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }

    // Create new review
    const review = new Review({ provider: providerId, rating, comment });
    const newReview = await review.save();

    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all reviews for a provider
const getReviewsByProvider = async (req, res) => {
  const { providerId } = req.params;

  try {
    const reviews = await Review.find({ provider: providerId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single review by ID
const getReviewById = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createReview, getReviewsByProvider, getReviewById };
