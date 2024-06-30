// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1'; // Update with your backend URL

// Function to fetch all services
export const fetchServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/services`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to create a new service
export const createService = async (serviceData) => {
  try {
    const response = await axios.post(`${API_URL}/services`, serviceData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update a service
export const updateService = async (serviceId, serviceData) => {
  try {
    const response = await axios.put(`${API_URL}/services/${serviceId}`, serviceData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to delete a service
export const deleteService = async (serviceId) => {
  try {
    const response = await axios.delete(`${API_URL}/services/${serviceId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
