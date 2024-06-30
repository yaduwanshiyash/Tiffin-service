import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import SubscriptionCard from "./SubscriptionCard";
import FeedbackForm from './FeedbackForm';

const Profile = () => {
  const { user, handleLogout } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:4000/api/v1/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSubscriptions(response.data.user.subscriptions);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-6 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800">
                Welcome, {user?.name}!
              </h2>
              <p className="text-gray-600 mt-2">View and manage your profile.</p>
            </div>
            <div className="mt-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Location:</h3>
                  <p className="text-gray-600">
                    {user?.location?.city}, {user?.location?.state},{" "}
                    {user?.location?.country}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Subscriptions:</h3>
                <div className="mt-4">
                  {subscriptions.length > 0 ? (
                    subscriptions.map((subscription) => (
                      <SubscriptionCard
                        key={subscription._id}
                        subscription={subscription}
                      />
                      
                    ))
                  ) : (
                    <p className="text-gray-600">No subscriptions found.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;






















