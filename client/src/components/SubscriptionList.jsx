import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/subscriptions');
        setSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Subscription
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select a subscription plan that suits your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((subscription) => (
            <div key={subscription._id} className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4 ">
                <h3 className="text-2xl font-extrabold text-gray-900 pb-8">{subscription.name ? subscription.name : "Standard Plan"}</h3>
                {subscription.name === "Popular Standard Plan" && (
                  <span className="ml-2 bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Popular</span>
                )}
              </div>
              <p className="text-3xl text-gray-900 font-bold">{subscription.product.name}</p>
              <p className="text-gray-600 mt-2">{subscription.plan.duration} - {subscription.plan.frequency} times a day</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm2-3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-700">Access to all features</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm2-3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-700">24/7 Customer Support</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#" className="block w-full bg-indigo-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-indigo-600 transition duration-300">
                  Subscribe Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionList;
