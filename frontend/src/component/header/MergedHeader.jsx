



import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const MergedHeader = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  const visibleCategories = showAll ? categories : categories.slice(0, 10);

  return (
    <div>
      {/* Static Headerend Section */}
      {/* <li className='ml-3'>
        <a href="shop-fullwidth-banner.html">
          <i className="w-icon-tshirt2"></i>Fashion
        </a>
        <ul className="megamenu">
          <li>
            <h4 className="menu-title">Women</h4>
            <hr className="divider" />
          </li>
          <li>
            <h4 className="menu-title">Men</h4>
            <hr className="divider" />
          </li>
        </ul>
      </li> */}

      {/* Dynamic Categories Section */}
      {visibleCategories.map((category, index) => (
        <React.Fragment key={category._id}>
          
          <li className='ml-3'>
            <a href={`/category/${category._id}`}>
              <i className={`w-icon-${getIconClass(index)}`}></i>{category.name}
            </a>
          </li>
          <div className='px-5 py-1'><hr /></div>
        </React.Fragment>
      ))}

      {/* View All Button */}
      {!showAll && categories.length > 11 && (
        <>
          <div className='px-5 py-1'><hr /></div>
          <li className='ml-3'>
            <button
              onClick={() => setShowAll(true)}
              className="font-weight-bold text-primary text-uppercase ls-25 bg-transparent border-0 p-0"
              style={{ cursor: "pointer" }}
            >
              View All Categories <i className="w-icon-angle-right"></i>
            </button>
          </li>
        </>
      )}
    </div>
  );
};

// Optional icon mapping logic
const getIconClass = (index) => {
  // electronics
  const icons = [
    "ruby", "furniture", "sport", "tshirt2", "gamepad",
    "tshirt2", "ios", "gamepad", "ruby", "shirt", "tshirt2", "home","tshirt2",
  ];
  return icons[index % icons.length];
};

export default MergedHeader;
