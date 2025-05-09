



import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiBox,
  FiShoppingCart,
  FiDollarSign,
  FiBarChart2,
  FiTruck,
  FiLogOut,
  FiMenu,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import Dashboard from "./Dashboard";

const Adminhome = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isAdminPage = location.pathname === "/admin-panel";

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-full transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-20"
        } ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <h2 className={`text-xl font-bold transition-all ${sidebarOpen ? "block" : "hidden"}`}>Admin Panel</h2>
          <FiMenu className="cursor-pointer text-2xl md:hidden" onClick={toggleSidebar} />
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 flex flex-col space-y-2 flex-grow">
          <NavLink to="/admin-panel/dashboard" className="nav-link">
            <FiHome className="icon" /> {sidebarOpen && "Dashboard"}
          </NavLink>
          <NavLink to="/admin-panel/products" className="nav-link">
            <FiBox className="icon" /> {sidebarOpen && "Products"}
          </NavLink>
          <NavLink to="/admin-panel/vendors" className="nav-link">
            <FiUsers className="icon" /> {sidebarOpen && "Vendors"}
          </NavLink>
          <NavLink to="/admin-panel/orders" className="nav-link">
            <FiShoppingCart className="icon" /> {sidebarOpen && "Orders"}
          </NavLink>
          <NavLink to="/admin-panel/alluser" className="nav-link">
            <FiDollarSign className="icon" /> {sidebarOpen && "AllUsers"}
          </NavLink>
          <NavLink to="/admin-panel/reports" className="nav-link">
            <FiBarChart2 className="icon" /> {sidebarOpen && "Reports"}
          </NavLink>
          <NavLink to="/admin-panel/shipping" className="nav-link">
            <FiTruck className="icon" /> {sidebarOpen && "Shipping"}
          </NavLink>
          <NavLink to="/admin-panel/settings" className="nav-link">
            <FiSettings className="icon" /> {sidebarOpen && "Settings"}
          </NavLink>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <button onClick={handleDarkModeToggle} className="flex items-center gap-2">
            {darkMode ? <FiSun className="icon" /> : <FiMoon className="icon" />} 
            {sidebarOpen && (darkMode ? "Light Mode" : "Dark Mode")}
          </button>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <NavLink to="/logout" className="nav-link text-red-500">
            <FiLogOut className="icon" /> {sidebarOpen && "Logout"}
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "ml-20"}`}>
        {isAdminPage ? <Dashboard /> : <Outlet />}
        {/* Footer */}
        <footer className="mt-10 p-4 text-center border-t bg-gray-200 dark:bg-gray-800 dark:text-white">
          © {new Date().getFullYear()} Admin Panel. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Adminhome;
