import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Oops!</h2>
        <p className="text-lg text-gray-600 mb-6">Something went wrong.</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
