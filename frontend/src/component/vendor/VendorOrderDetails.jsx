



import { useEffect, useState } from "react";
import { BACKENDURL } from "../../config/config";
import { useSelector } from "react-redux";

const VendorOrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const vendor = useSelector(state => state.user.vendorDetails); // Get logged-in vendor details

    useEffect(() => {
        if (vendor?._id) fetchVendorOrders();
    }, [vendor]);
   
    const fetchVendorOrders = async () => {
        try {
            if (!vendor?._id) {
                console.error("Vendor ID is missing");
                return;
            }

            const response = await fetch(`${BACKENDURL}/api/v1/checkoutss/getvendororders/${vendor._id}`);

            if (!response.ok) {
                console.error("Error fetching orders:", response.statusText);
                return;
            }

            const result = await response.json();

            if (result.success) {
                setOrders(result.orders);
            } else {
                console.error("Error fetching orders:", result.message);
            }
        } catch (error) {
            console.error("Error fetching orders:", error.message);
        }
    };
    
    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            const response = await fetch(`${BACKENDURL}/api/v1/checkoutss/update-status/${orderId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });

            const result = await response.json();
            if (result.success) {
                setOrders(prevOrders =>
                    prevOrders.map(order =>
                        order._id === orderId ? { ...order, status: newStatus } : order
                    )
                );
            } else {
                console.error("Error updating order:", result.message);
            }
        } catch (error) {
            console.error("Error updating order:", error.message);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mb-10">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Vendor Orders</h1>
            {orders.length === 0 ? (
                <p className="text-gray-500 text-center text-lg">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-700 text-white text-sm uppercase">
                            <tr>
                                <th className="py-3 px-4 border text-left">Order ID</th>
                                <th className="py-3 px-4 border text-left">Customer</th>
                                <th className="py-3 px-4 border text-left">Products</th>
                                <th className="py-3 px-4 border text-left">Total Amount</th>
                                <th className="py-3 px-4 border text-left">Address</th>
                                <th className="py-3 px-4 border text-left">Status</th>
                                <th className="py-3 px-4 border text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders.map(order => (
                                <tr key={order._id} className="hover:bg-gray-100 transition">
                                    <td className="py-4 px-4 border">{order._id}</td>
                                    <td className="py-4 px-4 border">
                                        <p className="font-semibold">{order.billingDetails.firstName} {order.billingDetails.lastName}</p>
                                        <p className="text-gray-500 text-sm">{order.billingDetails.phone}</p>
                                    </td>
                                    <td className="py-4 px-4 border">
                                        {order.products.map(product => (
                                            <div key={product.productId} className="mb-2">
                                                <p className="font-semibold">{product.name}</p>
                                                <p className="text-sm text-gray-500">Qty: {product.quantity} | ₹{product.price}</p>
                                                <p className="text-sm">size:{product.size}</p>
                                            </div>
                                        ))}
                                    </td>
                                    <td className="py-4 px-4 border font-semibold text-green-600">
                                        ₹{order.totalAmount}
                                    </td>
                                    <td className="py-4 px-4 border">
                                        <p className="font-medium">{order.billingDetails.streetAddress1}</p>
                                        <p className="text-sm text-gray-500">{order.billingDetails.city}, {order.billingDetails.state}</p>
                                        <p className="text-sm text-gray-500">{order.billingDetails.country}, {order.billingDetails.zip}</p>
                                    </td>
                                    <td className="py-4 px-4 border">
                                        <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold
                                            ${order.status === "Pending" ? "bg-yellow-500" :
                                               order.status === "Shipped" ? "bg-blue-500" :
                                               "bg-green-500"
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 border">
                                        <select
                                            className="px-3 py-2 border rounded bg-white text-gray-700 focus:ring focus:ring-blue-300"
                                            value={order.status}
                                            onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
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

export default VendorOrderDetails;


