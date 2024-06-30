const express = require('express');
const router = express.Router();
const { getSubscriptions, createSubscription, updateSubscription, deleteSubscription, getSubscriptionPlansByProvider, checkSubscriptionStatus, addSubscriptionToUser} = require('../controllers/subscriptionController');
const auth = require('../middleware/authMiddleware');

// Get all subscriptions
router.get('/subscriptions', getSubscriptions);

// Create new subscription
router.post('/subscriptions',  createSubscription);

// Update subscription
router.put('/subscriptions/:id', updateSubscription);

// Delete subscription
router.delete('/subscriptions/:id', deleteSubscription);

//modify
router.get('/providers/:providerId/subscription-plans', getSubscriptionPlansByProvider);

// Add a new method to check if a user is subscribed to a particular provider or product or not?
router.get('/subscriptions/status', checkSubscriptionStatus);


// add Subscription To User
router.post('/subscribe', addSubscriptionToUser);


// modify
const Subscription = require('../models/Subscription');

router.post('/subscriptions/:id/feedback', async (req, res) => {
  try {
    const { feedback, date } = req.body;
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({ success: false, message: 'Subscription not found' });
    }

    subscription.lunches.push({ date, feedback });
    await subscription.save();

    res.status(200).json({ success: true, message: 'Feedback added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
