const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  location: {
    city: String,
    state: String,
    country: String,
  },
  isAdmin: { type: Boolean, default: false },
  subscriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }] 
});

module.exports = mongoose.model('User', userSchema);
