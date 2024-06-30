import React, { useEffect, useState } from 'react';
import { fetchServices, createService, updateService, deleteService } from '../services/servicesApi';
import ServiceForm from './ServiceForm';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateService = async (serviceData) => {
    try {
      const newService = await createService(serviceData);
      setServices([...services, newService]);
    } catch (error) {
      console.error('Error creating service:', error.message);
    }
  };

  const handleUpdateService = async (serviceId, serviceData) => {
    try {
      const updatedService = await updateService(serviceId, serviceData);
      const updatedServices = services.map((service) =>
        service._id === serviceId ? updatedService : service
      );
      setServices(updatedServices);
    } catch (error) {
      console.error('Error updating service:', error.message);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      await deleteService(serviceId);
      const updatedServices = services.filter((service) => service._id !== serviceId);
      setServices(updatedServices);
    } catch (error) {
      console.error('Error deleting service:', error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Services</h1>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service._id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-gray-700 mb-2">${service.price}</p>

            {/* Action buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => handleUpdateService(service._id, { ...service, price: service.price + 10 })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Update Price
              </button>
              <button
                onClick={() => handleDeleteService(service._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Service Form */}
      <ServiceForm onSubmit={handleCreateService} />
    </div>
  );
};

export default Services;
