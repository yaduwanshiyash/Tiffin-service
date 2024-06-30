import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the features that make our platform unique.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11a2 2 0 012 2v7M3 10h11a2 2 0 002-2v-7m-8 3h4m-2-2v4m8 0h4m-2-2v4" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Easy to Use</h3>
              <p className="mt-2 text-base text-gray-600">
                Intuitive and user-friendly interface for both providers and buyers.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Flexible Subscription Plans</h3>
              <p className="mt-2 text-base text-gray-600">
                Choose from monthly or yearly subscription options.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Wide Range of Services</h3>
              <p className="mt-2 text-base text-gray-600">
                Explore diverse services offered by our talented providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
