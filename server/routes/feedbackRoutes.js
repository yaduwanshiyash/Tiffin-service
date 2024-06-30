const express = require('express');
const router = express.Router();
const { getFeedback, createFeedback, updateFeedback, deleteFeedback } = require('../controllers/feedbackController');

// Get all feedback
router.get('/', getFeedback);

// Create new feedback
router.post('/', createFeedback);

// Update feedback
router.put('/:id', updateFeedback);

// Delete feedback
router.delete('/:id', deleteFeedback);

module.exports = router;
