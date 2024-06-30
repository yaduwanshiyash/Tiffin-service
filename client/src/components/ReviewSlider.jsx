import React from 'react';

const ReviewSlider = ({ reviews }) => {
    if (reviews.length === 0) {
        return <p>No reviews available.</p>;
      }
  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 py-2">
        {reviews.map(review => (
          <div key={review._id} className="max-w-xs p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-800">{review.comment}</p>
            <p className="text-gray-600"><span className='text-black '>Rating</span> : {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
