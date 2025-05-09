



import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const user = useSelector((state) => state.user.user);
    const userId = user?._id;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`);
                setOrders(response.data.orders);
            } catch (err) {
                console.error("Error fetching orders:", err);
            }
        };

        if (userId) fetchOrders();
    }, [userId]);

    const cancelOrder = async (orderId) => {
        try {
            const response = await axios.put(`${BACKENDURL}/api/v1/checkoutss/cancel-order/${orderId}`, {
                userId,
            });

            if (response.data.success) {
                alert("Order cancelled successfully!");
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order._id === orderId ? { ...order, status: "Cancelled" } : order
                    )
                );
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            console.error("Error cancelling order:", err);
            alert("Failed to cancel order. Please try again.");
        }
    };

    return (
        <>
            <div class="page-content pt-2">
                <div class="container">
                    <div class="tab tab-vertical row gutter-lg">
                        <div className="tab-pane mb-4" id="account-orders">
                            <div className="icon-box icon-box-side icon-box-light">
                                <span className="icon-box-icon icon-orders">
                                    <i className="w-icon-orders"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title text-capitalize ls-normal mb-0">Orders</h4>
                                </div>
                            </div>

                            {orders.length === 0 ? (
                                <p>No orders found.</p>
                            ) : (
                                <table className="shop-table account-orders-table mb-6">
                                    <thead>
                                        <tr>
                                            <th className="order-id">Order</th>
                                            <th className="order-date">Date</th>
                                            <th className="order-status">Status</th>
                                            <th className="order-total">Total</th>
                                            <th className="order-actions">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order._id}>
                                                <td className="order-id">#{order._id}</td>
                                                <td className="order-date">{new Date(order.createdAt).toDateString()}</td>
                                                <td className="order-status">{order.status}</td>
                                                <td className="order-total">
                                                    <span className="order-price">${order.totalAmount.toFixed(2)}</span> for
                                                    <span className="order-quantity"> {order.products.length}</span> item(s)
                                                </td>
                                                <td className="order-action">
                                                    <a href="order-detail" className="btn btn-outline btn-default btn-block btn-sm btn-rounded">
                                                        View
                                                    </a>
                                                    {order.status !== "Cancelled" && order.status !== "Shipped" && order.status !== "Delivered" && (
                                                        <button
                                                            className="btn btn-outline btn-danger btn-block btn-sm btn-rounded"
                                                            onClick={() => cancelOrder(order._id)}
                                                        >
                                                            Cancel Order
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}

                            <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">
                                Go Shop<i className="w-icon-long-arrow-right"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>

    );
};

export default Order;
