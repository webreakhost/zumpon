



import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { clearUser } from "../../store/UserSlice";
import Context from "../../context/index";
import { useContext } from "react";
import { FaUser, FaBox, FaDownload, FaMapMarkerAlt, FaHeart, FaCogs, FaStore, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);
    const user = useSelector((state) => state.user.user);
    const { userId } = useParams(); // Get userId from URL

    const handleLogout = () => {
        dispatch(clearUser()); // Clear user details from Redux
        fetchUserDetails(); // Reset user state in context
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="w-68 bg-gray-900 text-white min-h-screen p-5 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Dashboard</h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaUser />
                    <a href="#account-dashboard" className="text-3xl">Dashboard</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaBox />
                    <a href="orders" className="text-3xl">Orders</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaBox />
                    <a href="order-detail" className="text-3xl">Orders details</a>
                    {/* <Link to={`order-detail/${userId}`}>View Order Details</Link> */}
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaDownload />
                    <a href="#account-downloads" className="text-3xl">Downloads</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaMapMarkerAlt />
                    <a href="#account-addresses" className="text-3xl">Addresses</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaCogs />
                    <a href="#account-details" className="text-3xl">Account Details</a>
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FaHeart />
                    <a href="wishlist.html" className="text-3xl">Wishlist</a>
                </li>
                {user?.role === "admin" && (
                    <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FaCogs />
                        <a href="admin-panel" className="text-3xl">Admin Panel</a>
                    </li>
                )}
                {user?.role === "vendor" && (
                    <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FaStore />
                        <a href="vendor-panel" className="text-3xl">Vendor Panel</a>
                    </li>
                )}
                <li className="flex items-center gap-3 p-3 hover:bg-red-600 rounded-lg cursor-pointer text-red-400 hover:text-white" onClick={handleLogout}>
                    <FaSignOutAlt />
                    <span className="text-lg">Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;



