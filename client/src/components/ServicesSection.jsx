import React from 'react';

const ServicesSection = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Browse through our top-rated services offered by Tiffin providers.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1: Lunch Providing Services */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1695654392283-4ea0fa0b4bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1bmNoJTIwc2VydmljZSUyMHByb3ZpZGVyfGVufDB8fDB8fHww" alt="Lunch Providing Services" />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Lunch Providing Services</h3>
              <p className="mt-2 text-base text-gray-600">
                Enjoy delicious and healthy lunches delivered right to your door. Perfect for busy professionals and families.
              </p>
              <div className="mt-4">
                <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Service 2: Order Food */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
            <img className="h-48 w-full object-cover" src="https://plus.unsplash.com/premium_photo-1667509263761-ee145bf8011b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JkZXIlMjBmb29kfGVufDB8fDB8fHww" alt="Order Food" />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Order Food</h3>
              <p className="mt-2 text-base text-gray-600">
                Order your favorite meals from a wide variety of restaurants and have them delivered to your doorstep.
              </p>
              <div className="mt-4">
                <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Service 3: Catering Services */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
            <img className="h-48 w-full object-cover" src="https://plus.unsplash.com/premium_photo-1663126629970-f76cf591361d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0ZWdvcnklMjBmb29kJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="Catering Services" />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Catering Services</h3>
              <p className="mt-2 text-base text-gray-600">
                Make your events memorable with our professional catering services. Perfect for weddings, parties, and corporate events.
              </p>
              <div className="mt-4">
                <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
