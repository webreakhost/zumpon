import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DynamicHead from "../component/DynamicHead";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 20000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
    <DynamicHead
  title="Order Successful - Zumpon"
  description="Thank you for your purchase! Your order has been placed successfully. Track your order and explore more amazing products on Zumpon."
  keywords="Order Success, Purchase Complete, Order Confirmation, Zumpon"
  image="https://zumpon.com/images/order-success-banner.png"
  url="https://zumpon.com/order-success"
  author="Zumpon Team"
/>

<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full animate-fade-in">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition transform hover:scale-105 duration-300 shadow-md"
          >
            Back to Home
          </button>

          <button
            onClick={() => navigate("/order-detail")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition transform hover:scale-105 duration-300 shadow-md"
          >
            Go to Order Details
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4">Redirecting to home in 20 seconds...</p>
      </div>
    </div>
    </>
   
  );
};

export default OrderSuccess;
