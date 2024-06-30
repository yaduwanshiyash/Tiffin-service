const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  subscriptionPlans: [{
    duration: String,
    frequency: String,
    price: Number
  }],
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },
});

module.exports = mongoose.model('Product', productSchema);
