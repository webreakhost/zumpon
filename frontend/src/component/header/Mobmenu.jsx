


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BACKENDURL } from "../../config/config";
import { AiOutlineHome, AiOutlineShop, AiOutlineClose } from "react-icons/ai";
import { MdStorefront, MdOutlineCategory } from "react-icons/md";
import { BiCategory, BiSearchAlt2 } from "react-icons/bi";
import { FaBlog, FaInfoCircle } from "react-icons/fa";

const Mobmenu = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(res.data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term.");
      return;
    }

    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    onClose(); // Close the menu after search
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      <div
        className={`fixed top-0 left-0 w-[300px] bg-black text-white h-full shadow-lg transform transition-transform ease-in-out duration-800 p-6 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4 text-gray-300 text-2xl" onClick={onClose}>
          <AiOutlineClose />
        </button>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 flex items-center border border-gray-600 rounded-md p-2"
        >
          <input
            type="text"
            className="bg-transparent outline-none w-full text-white placeholder-gray-400"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-gray-400 hover:text-white text-2xl">
            <BiSearchAlt2 />
          </button>
        </form>

        {/* Navigation Tabs */}
        <div className="mt-6">
          <ul className="flex border-b border-gray-700">
            <li
              className={`flex-1 text-center py-2 cursor-pointer ${
                !showCategories ? "border-b-2 border-white" : "text-gray-400"
              }`}
              onClick={() => setShowCategories(false)}
            >
              Main Menu
            </li>
            <li
              className={`flex-1 text-center py-2 cursor-pointer ${
                showCategories ? "border-b-2 border-white" : "text-gray-400"
              }`}
              onClick={() => setShowCategories(true)}
            >
              Categories
            </li>
          </ul>
        </div>

        {!showCategories ? (
          <div className="mt-6">
            <ul className="space-y-4">
              <li>
                <a href="/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                  <AiOutlineHome /> Home
                </a>
                <hr className="border-gray-700" />
              </li>

              {/* Shop Dropdown */}
              <li>
                <button
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                  onClick={() => toggleMenu("shop")}
                >
                  <span className="flex items-center gap-2"><AiOutlineShop /> Shop</span>
                  <span>{openMenu === "shop" ? "▲" : "▼"}</span>
                </button>
                {openMenu === "shop" && (
                  <ul className="pl-6 py-2 space-y-2">
                    <li>
                      <a href="/vendor-store-list" className="block hover:text-yellow-300">
                        Banner With Sidebar
                      </a>
                    </li>
                  </ul>
                )}
                <hr className="border-gray-700" />
              </li>

              {/* Vendor Dropdown */}
              <li>
                <button
                  className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                  onClick={() => toggleMenu("vendor")}
                >
                  <span className="flex items-center gap-2"><MdStorefront /> Vendor</span>
                  <span>{openMenu === "vendor" ? "▲" : "▼"}</span>
                </button>
                {openMenu === "vendor" && (
                  <ul className="pl-6 py-2 space-y-2">
                    <li>
                      <a href="/vendor-store-list" className="block hover:text-yellow-300">
                        Store Listing 1
                      </a>
                    </li>
                  </ul>
                )}
                <hr className="border-gray-700" />
              </li>

              <li>
                <a href="/blog" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                  <FaBlog /> Blog
                </a>
                <hr className="border-gray-700" />
              </li>

              <li>
                <a href="/about-us" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700">
                  <FaInfoCircle /> About Us
                </a>
                <hr className="border-gray-700" />
              </li>
            </ul>
          </div>
        ) : (
          <div className="mt-6">
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={category._id}>
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                    onClick={() => toggleMenu(category._id)}
                  >
                    <span className="flex items-center gap-2">
                      <BiCategory /> {category.name}
                    </span>
                    <span>{openMenu === category._id ? "▲" : "▼"}</span>
                  </button>

                  {openMenu === category._id && (
                    <ul className="pl-6 py-2 space-y-2">
                      <li>
                        <a
                          href={`/category/${category._id}`}
                          className="block hover:text-yellow-300"
                        >
                          Go to {category.name}
                        </a>
                      </li>
                    </ul>
                  )}
                  <hr className="border-gray-700" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobmenu;
