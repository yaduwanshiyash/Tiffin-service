import React from 'react';
import axios from 'axios';

const PaymentForm = ({ selectedPlan, user, onSuccess }) => {
  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/create-order', {
        amount: selectedPlan.price,
      });
      const { data } = response;

      const options = {
        key: "rzp_test_DhrfG1havJ8Uo1",
        amount: data.amount,
        currency: data.currency,
        name: "Lunch Service",
        description: `Payment for ${selectedPlan.duration} plan`,
        order_id: data.id,
        handler: async (response) => {
          const paymentData = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };

          try {
            const verifyResponse = await axios.post('http://localhost:4000/api/verify-payment', paymentData);
            if (verifyResponse.data.success) {
              await axios.post('http://localhost:4000/api/subscribe', {
                userId: user._id,
                subscriptionPlan: selectedPlan,
              });
              onSuccess();
              alert('Subscription successful!');
            } else {
              alert('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          // name: user.name,
          // email: user.email,
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <button
      className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      onClick={handlePayment}
    >
      Subscribe Now
    </button>
  );
};

export default PaymentForm;
