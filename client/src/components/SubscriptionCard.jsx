import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const SubscriptionCard = ({ subscription }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [existingFeedbacks, setExistingFeedbacks] = useState([]);

  useEffect(() => {
    // Load existing feedbacks initially
    loadExistingFeedbacks();
  }, []);

  const loadExistingFeedbacks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `http://localhost:4000/api/v1/subscriptions/${subscription._id}/feedback`
      );
      const existingFeedbacksData = response.data;
      setExistingFeedbacks(existingFeedbacksData);
    } catch (error) {
      console.error('Error loading existing feedbacks:', error);
    }
  };

  const handleFeedbackSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      // Submit all feedbacks in one go
      await axios.post(
        `http://localhost:4000/api/v1/subscriptions/${subscription._id}/feedback`,
        feedbacks.map((feedback) => ({
          feedback: feedback.feedback,
          date: feedback.date,
        })),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Clear feedback inputs
      setFeedbacks([]);
      // Refresh existing feedbacks after submission
      loadExistingFeedbacks();
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleFeedbackChange = (lunchDate, feedbackText) => {
    const updatedFeedbacks = [...feedbacks];
    const existingIndex = updatedFeedbacks.findIndex((item) => item.date === lunchDate);
    if (existingIndex !== -1) {
      updatedFeedbacks[existingIndex].feedback = feedbackText;
    } else {
      updatedFeedbacks.push({ date: lunchDate, feedback: feedbackText });
    }
    setFeedbacks(updatedFeedbacks);
  };

  // Determine number of feedback inputs based on subscription plan frequency
  const feedbackInputs = [];
  for (let i = 0; i < subscription.plan.frequency; i++) {
    feedbackInputs.push(
      <div key={i} className="mt-4">
        <p className="text-gray-600">Lunch on {format(new Date(subscription.lunches[i].date), 'MMMM dd, yyyy')}</p>
        <input
          type="text"
          value={feedbacks[i] ? feedbacks[i].feedback : ''}
          onChange={(e) => handleFeedbackChange(subscription.lunches[i].date, e.target.value)}
          placeholder="Enter your feedback"
          className="mt-2 w-full p-2 border rounded text-gray-700 outline-none"
        />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url('https://via.placeholder.com/600x400')` }}>
        <div className="flex justify-end">
          <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{subscription.product.name}</h2>
        <p className="text-gray-600 mt-2">{subscription.provider.name}</p>
        <div className="mt-4">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-gray-600 fill-current" viewBox="0 0 24 24">
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <h3 className="ml-2 text-gray-600 font-bold">Subscription Details</h3>
          </div>
          <p className="text-gray-600 mt-2">Duration: {subscription.plan.duration}</p>
          <p className="text-gray-600 mt-2">Frequency: {subscription.plan.frequency}/day</p>
          <p className="text-gray-600 mt-2">Start Date: {format(new Date(subscription.plan.startDate), 'MMMM dd, yyyy')}</p>
          <p className="text-gray-600 mt-2">End Date: {format(new Date(subscription.plan.endDate), 'MMMM dd, yyyy')}</p>
          <p className="text-gray-600 mt-2">Address: {subscription.address}</p>
          <p className={`mt-2 font-bold ${subscription.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>Status: {subscription.status}</p>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700">Give Your Feedback</h4>
          {feedbackInputs.length > 0 && (
            <>
              {feedbackInputs}
              <button
                onClick={handleFeedbackSubmit}
                className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700"
              >
                Submit Feedback
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
