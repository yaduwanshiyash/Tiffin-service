import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ subscriptionId }) => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:4000/api/v1/feedback',
        { subscription: subscriptionId, feedback, rating },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeedback('');
      setRating(5);
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h4 className="text-lg font-semibold text-gray-700">Give Feedback</h4>
      <textarea
        className="w-full p-2 border rounded-md text-gray-700"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your feedback..."
        required
      ></textarea>
      <select
        className="w-full p-2 border rounded-md"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="1">1 - Very Bad</option>
        <option value="2">2 - Bad</option>
        <option value="3">3 - Okay</option>
        <option value="4">4 - Good</option>
        <option value="5">5 - Excellent</option>
      </select>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
