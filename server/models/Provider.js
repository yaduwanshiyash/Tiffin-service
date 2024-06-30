const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: String,
  description: { type: String, required: true },
  location: {
    city: String,
    state: String,
    country: String,
  },
  rating: { type: Number, default: 0 },
  bannerImage: { type: String, required: true },
  profileImage: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Provider', providerSchema);
