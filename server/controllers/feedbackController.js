const Feedback = require('../models/Feedback');

// Get all feedback
const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().populate('user product');
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new feedback
const createFeedback = async (req, res) => {
  const { user, product, rating, comment } = req.body;
  const feedback = new Feedback({ user, product, rating, comment });

  try {
    const newFeedback = await feedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update feedback
const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { user, product, rating, comment } = req.body;

  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(id, { user, product, rating, comment }, { new: true });
    res.json(updatedFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete feedback
const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  try {
    await Feedback.findByIdAndDelete(id);
    res.json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getFeedback, createFeedback, updateFeedback, deleteFeedback };
