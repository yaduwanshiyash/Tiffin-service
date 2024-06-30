const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  date: Date,
  feedback: String
});

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },
  plan: {
    duration: String,
    frequency: String,
    startDate: Date,
    endDate: Date
  },
  lunches: [feedbackSchema],
  address: String,
  status: { type: String, default: 'active' }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
