const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  date: Date,
  feedback: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
