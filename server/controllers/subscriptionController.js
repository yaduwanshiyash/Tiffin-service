const Subscription = require("../models/Subscription");
const Product = require("../models/Product");
const User = require("../models/User");

// Get all subscriptions
const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate("user product");
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new subscription
// Assuming you have middleware to handle authentication and fetch the current user
const createSubscription = async (req, res) => {
  const { product, provider, plan, address } = req.body;
  const { currentUser } = req; // Assuming currentUser is fetched from authentication middleware

  // Calculate the end date based on the plan duration
  const startDate = new Date();
  let endDate;

  switch (plan.duration) {
    case "1 month":
      endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 1);
      break;
    case "3 months":
      endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 3);
      break;
    case "6 months":
      endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 6);
      break;
    default:
      endDate = new Date(startDate);
  }

  const subscription = new Subscription({
    user: currentUser._id, // Associate subscription with current user
    product,
    provider,
    plan: {
      ...plan,
      startDate,
      endDate,
    },
    address,
  });

  try {
    const newSubscription = await subscription.save();
    res.status(201).json(newSubscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Update subscription
const updateSubscription = async (req, res) => {
  const { id } = req.params;
  const { user, product, provider, plan, address } = req.body;

  try {
    const updatedSubscription = await Subscription.findByIdAndUpdate(
      id,
      { user, product, provider, plan, address },
      { new: true }
    );
    res.json(updatedSubscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete subscription
const deleteSubscription = async (req, res) => {
  const { id } = req.params;

  try {
    await Subscription.findByIdAndDelete(id);
    res.json({ message: "Subscription deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// modify
const getSubscriptionPlansByProvider = async (req, res) => {
  try {
    const { providerId } = req.params;
    const products = await Product.find({ provider: providerId });

    const subscriptionPlans = products.flatMap(
      (product) => product.subscriptionPlans
    );

    res.status(200).json(subscriptionPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new method to check if a user is subscribed to a particular provider or product or not?
const checkSubscriptionStatus = async (req, res) => {
  try {
    const { userId, providerId, productId } = req.query;
    const query = { user: userId };

    if (providerId) query.provider = providerId;
    if (productId) query.product = productId;

    const subscription = await Subscription.findOne(query);

    if (subscription) {
      res.status(200).json({ subscribed: true, subscription });
    } else {
      res.status(200).json({ subscribed: false });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add Subscription To User
const addSubscriptionToUser = async (req, res) => {
  const { userId, subscriptionId } = req.body;

  try {
    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Assuming subscriptionPlan is fetched using subscriptionId
    const subscriptionPlan = await Subscription.findById(subscriptionId);
    if (!subscriptionPlan) {
      return res.status(404).json({ message: "Subscription plan not found" });
    }

    // Add the subscription plan to user's subscriptions array
    user.subscriptions.push(subscriptionPlan);
    await user.save();

    res.status(201).json({ message: "Subscription added to user profile", user });
  } catch (error) {
    console.error("Error subscribing user:", error);
    res.status(500).json({ message: "Failed to subscribe user" });
  }
};


module.exports = {
  getSubscriptions,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getSubscriptionPlansByProvider,
  checkSubscriptionStatus, addSubscriptionToUser
};
