// import React from 'react'

// const Allorderadmin = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Allorderadmin


import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config"; // Ensure correct API URL

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/admin/orders`);
        setOrders(response.data.orders);
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Orders</h2>

      {loading ? (
        <p className="text-blue-500">Loading orders...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Order ID</th>
                <th className="border p-3 text-left">User ID</th>
                <th className="border p-3 text-left">Total Amount</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Products</th>
                <th className="border p-3 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="border p-3">{order._id}</td>
                  <td className="border p-3">{order.userId}</td>
                  <td className="border p-3 font-semibold">${order.totalAmount.toFixed(2)}</td>
                  <td className="border p-3 text-blue-600">{order.status}</td>
                  <td className="border p-3">
                    <ul className="list-disc pl-5">
                      {order.products.map((product) => (
                        <li key={product.productId}>
                          <span className="font-semibold">{product.name}</span> - {product.quantity}x ${product.price}
                          <br />
                          <span className="text-gray-500 text-sm">Vendor: {product.vendorName || "Unknown"}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
