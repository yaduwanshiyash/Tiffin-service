import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/providers');
        setProviders(response.data);
      } catch (error) {
        console.error('Error fetching providers:', error);
      }
    };

    fetchProviders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">Lunch Provider's</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map(provider => (
          <div key={provider._id} className=" bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-">
            <div className="relative">
              <img className="w-full h-48 object-cover object-center" src={provider.bannerImage} alt={provider.name} />
              <div className="absolute top-0 left-0 bg-indigo-500 px-3 py-1 text-white font-semibold rounded-br-lg">{provider.rating}</div>
            </div>
            <div className="px-8 pb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">{provider.name}</h3>
              <p className="text-gray-600 mb-4">{provider.location.city}, {provider.location.state}, {provider.location.country}</p>
              <Link to={`/providers/${provider._id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out block text-center">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
