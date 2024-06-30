// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import ReviewSlider from "./ReviewSlider";
// import { useAuth } from "../context/AuthContext";

// const ProviderProfile = () => {
//   const { providerId } = useParams();
//   const { user } = useAuth();

//   const [provider, setProvider] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [subscriptionPlans, setSubscriptionPlans] = useState([]);
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   useEffect(() => {
//     const fetchProviderDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/api/v1/providers/${providerId}`
//         );
//         setProvider(response.data);
//       } catch (error) {
//         console.error("Error fetching provider details:", error);
//       }
//     };

//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/api/v1/providers/${providerId}/reviews`
//         );
//         setReviews(response.data);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/api/v1/providers/${providerId}/products`
//         );
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     const fetchSubscriptionPlans = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/api/v1/providers/${providerId}/subscription-plans`
//         );
//         setSubscriptionPlans(response.data);
//       } catch (error) {
//         console.error("Error fetching subscription plans:", error);
//       }
//     };

//     if (providerId) {
//       fetchProviderDetails();
//       fetchReviews();
//       fetchProducts();
//       fetchSubscriptionPlans();
//     }
//   }, [providerId]);

//   const handlePlanSelect = (plan) => {
//     setSelectedPlan(plan);
//   };

//   const handleSubscribe = async () => {
//     if (!selectedPlan) {
//       alert("Please select a subscription plan.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:4000/api/v1/subscribe`,
//         {
//           userId: user._id,
//           subscriptionPlan: selectedPlan,
//         }
//       );

//       console.log("Subscription successful:", response.data);
//       alert("Subscription successful!");
//     } catch (error) {
//       console.error("Error subscribing:", error);
//       alert("Please, login for subscribing");
//     }
//   };

//   if (!provider) {
//     return (
//       <div className="text-center text-black">Loading provider details...</div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//         {provider.name} Details
//       </h2>
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="relative">
//           <img
//             className="w-full h-64 object-cover object-center text-black"
//             src={provider.bannerImage}
//             alt={provider.name}
//           />
//           <div className="absolute top-0 left-0 bg-blue-500 px-3 py-1 text-white font-semibold rounded-br-lg">
//             {provider.rating}
//           </div>
//         </div>
//         <div className="p-6">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             {provider.name}
//           </h3>
//           <p className="text-gray-600 mb-4">
//             {provider.location.city}, {provider.location.state},{" "}
//             {provider.location.country}
//           </p>
//           <div className="mb-6">
//             <h4 className="text-xl font-semibold mb-4 text-black ">Reviews:</h4>
//             <ReviewSlider reviews={reviews} />
//           </div>

//           {/* Products list */}
//           <div className="mt-14">
//             <h4 className="text-xl text-black font-semibold mb-4">Products:</h4>
//             <ul>
//               {products.map((product) => (
//                 <li key={product._id} className="mb-2">
//                   <Link
//                     to={`/products/${product._id}`}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     {product.name}
//                   </Link>
//                   <span className="ml-2 text-gray-600">(₹{product.price}/order)</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Subscription cards */}
//           <div className="mt-14">
//             <h4 className="text-xl text-black font-semibold mb-4">
//               Subscription Plans:
//             </h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {subscriptionPlans.map((plan, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
//                 >
//                   <h5 className="text-lg font-bold text-gray-800 mb-2">
//                     Plan {index + 1}
//                   </h5>
//                   <p className="text-gray-600 mb-2 ">
//                     <span className="font-semibold text-gray-600 pr-4">
//                       Duration:{" "}
//                     </span>{" "}
//                     {plan.duration}
//                   </p>
//                   <p className="text-gray-600 mb-2 ">
//                     <span className="font-semibold text-gray-600 pr-4">
//                       Frequency:{" "}
//                     </span>{" "}
//                     {plan.frequency}
//                   </p>
//                   <p className="text-gray-600 mb-4 ">
//                     <span className="font-semibold text-gray-600 pr-4">
//                       Price:{" "}
//                     </span>{" "}
//                     ₹{plan.price}
//                   </p>
//                   <button
//                     className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out block text-center mt-4"
//                     onClick={() => handlePlanSelect(plan)}
//                   >
//                     Select Plan
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {selectedPlan && (
//               <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
//                   Selected Plan
//                 </h3>
//                 <div className="flex flex-col items-center mb-6">
//                   <p className="text-lg text-gray-700 mb-2">
//                     <span className="font-semibold text-gray-800">
//                       Duration:
//                     </span>{" "}
//                     {selectedPlan.duration}
//                   </p>
//                   <p className="text-lg text-gray-700 mb-2">
//                     <span className="font-semibold text-gray-800">
//                       Frequency:
//                     </span>{" "}
//                     {selectedPlan.frequency}
//                   </p>
//                   <p className="text-lg text-gray-700">
//                     <span className="font-semibold text-gray-800">Price:</span>{" "}
//                     ₹{selectedPlan.price}
//                   </p>
//                 </div>
//                 <button
//                   className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//                   onClick={handleSubscribe}
//                 >
//                   Subscribe Now
//                 </button>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/"
//             className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out block text-center mt-8"
//           >
//             Back to Providers
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProviderProfile;















import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";
import { useAuth } from "../context/AuthContext";
import PaymentForm from "./PaymentForm";

const ProviderProfile = () => {
  const { providerId } = useParams();
  const { user } = useAuth();

  const [provider, setProvider] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [products, setProducts] = useState([]);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const fetchProviderDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/providers/${providerId}`
        );
        setProvider(response.data);
      } catch (error) {
        console.error("Error fetching provider details:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/providers/${providerId}/reviews`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/providers/${providerId}/products`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchSubscriptionPlans = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/providers/${providerId}/subscription-plans`
        );
        setSubscriptionPlans(response.data);
      } catch (error) {
        console.error("Error fetching subscription plans:", error);
      }
    };

    if (providerId) {
      fetchProviderDetails();
      fetchReviews();
      fetchProducts();
      fetchSubscriptionPlans();
    }
  }, [providerId]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubscriptionSuccess = () => {
    setSelectedPlan(null); // Clear the selected plan after successful subscription
  };

  if (!provider) {
    return (
      <div className="text-center text-black">Loading provider details...</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        {provider.name} Details
      </h2>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-64 object-cover object-center text-black"
            src={provider.bannerImage}
            alt={provider.name}
          />
          <div className="absolute top-0 left-0 bg-blue-500 px-3 py-1 text-white font-semibold rounded-br-lg">
            {provider.rating}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {provider.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {provider.location.city}, {provider.location.state},{" "}
            {provider.location.country}
          </p>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-black ">Reviews:</h4>
            <ReviewSlider reviews={reviews} />
          </div>

          {/* Products list */}
          <div className="mt-14">
            <h4 className="text-xl text-black font-semibold mb-4">Products:</h4>
            <ul>
              {products.map((product) => (
                <li key={product._id} className="mb-2">
                  <Link
                    to={`/products/${product._id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {product.name}
                  </Link>
                  <span className="ml-2 text-gray-600">(₹{product.price}/order)</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription cards */}
          <div className="mt-14">
            <h4 className="text-xl text-black font-semibold mb-4">
              Subscription Plans:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <h5 className="text-lg font-bold text-gray-800 mb-2">
                    Plan {index + 1}
                  </h5>
                  <p className="text-gray-600 mb-2 ">
                    <span className="font-semibold text-gray-600 pr-4">
                      Duration:{" "}
                    </span>{" "}
                    {plan.duration}
                  </p>
                  <p className="text-gray-600 mb-2 ">
                    <span className="font-semibold text-gray-600 pr-4">
                      Frequency:{" "}
                    </span>{" "}
                    {plan.frequency}
                  </p>
                  <p className="text-gray-600 mb-4 ">
                    <span className="font-semibold text-gray-600 pr-4">
                      Price:{" "}
                    </span>{" "}
                    ₹{plan.price}
                  </p>
                  <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out block text-center mt-4"
                    onClick={() => handlePlanSelect(plan)}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>

            {selectedPlan && (
              <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Selected Plan
                </h3>
                <div className="flex flex-col items-center mb-6">
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-gray-800">
                      Duration:
                    </span>{" "}
                    {selectedPlan.duration}
                  </p>
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-gray-800">
                      Frequency:
                    </span>{" "}
                    {selectedPlan.frequency}
                  </p>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-gray-800">Price:</span>{" "}
                    ₹{selectedPlan.price}
                  </p>
                </div>
                <PaymentForm
                  selectedPlan={selectedPlan}
                  user={user}
                  onSuccess={handleSubscriptionSuccess}
                />
              </div>
            )}
          </div>

          <Link
            to="/"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out block text-center mt-8"
          >
            Back to Providers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
