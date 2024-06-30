import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 mb-6">
          <div className="text-center sm:text-left">
            <h5 className="text-xl font-bold">TiffinCareService</h5>
            <p className="text-gray-400 pt-2 text-md">High-quality service and exceptional delicous food.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col items-center justify-between sm:flex-row">
          <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mx-2 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;