import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-4">
          Hear from Our Users
        </h1>
        <p className="text-xl text-gray-600 text-center">
          Discover what our users have to say about their experiences with our services.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-base text-gray-600">
              "The lunch service provided by Tiffins is exceptional! Always on time and delicious."
            </p>
            <div className="mt-4">
              <p className="text-base font-medium text-gray-800">Priyansh Gour</p>
              <p className="text-sm text-gray-600">Regular User</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-base text-gray-600">
              "I love the convenience of ordering food through Tiffins. Quick and easy food service."
            </p>
            <div className="mt-4">
              <p className="text-base font-medium text-gray-800">Sweth Chouray</p>
              <p className="text-sm text-gray-600">New Customer</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-base text-gray-600">
              "Tiffins has made meal planning so much simpler with their variety of services."
            </p>
            <div className="mt-4">
              <p className="text-base font-medium text-gray-800">Yash yadav</p>
              <p className="text-sm text-gray-600">Long-time User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
