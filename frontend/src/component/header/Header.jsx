




import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To detect the current page
import Headtop from './Headtop';
import Headmidd from './Headmidd';
import Headerend from './Headerend';
import Headed1 from './Headed1';
import Headfur from './Headfur';
import Headund from './Headund';
import Mobmenu from '../mobile/Mobmenu';
import MergedHeader from './MergedHeader';

const Header = () => {
  const location = useLocation(); // Get the current route
  const [dropdownVisible, setDropdownVisible] = useState(location.pathname === '/');

  // Hide dropdown when navigating to another page, show it only on the homepage
  useEffect(() => {
    setDropdownVisible(location.pathname === '/');
  }, [location.pathname]);

  return (
    <div className="page-wrapper">
      <header className="header">
        <Headtop />
        <Headmidd />
        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div
                  className="dropdown category-dropdown has-border"
                  data-visible="true"
                  onMouseEnter={() => setDropdownVisible(true)}
                  onMouseLeave={() => {
                    if (location.pathname !== '/') setDropdownVisible(false);
                  }}
                >
                  <a href="#" className="category-toggle text-dark" role="button"
                    title="Browse Categories">
                    <i className="w-icon-category"></i>
                    <span>Browse Categories</span>
                  </a>

                  {/* Dropdown is always visible on the homepage, else only on hover */}
                  {dropdownVisible && (
                    <div className="dropdown-box">
                      <ul className="menu vertical-menu category-menu">
                        {/* <Headerend />
                        
                        <Headed1 />
                        <Headfur /> */}
                        <MergedHeader/>
                      </ul>
                    </div>
                  )}
                </div>
                <Headund />
              </div>
              <div className="header-right">
                <a href="order-detail" className="d-xl-show"><i className="w-icon-map-marker mr-1"></i>Track Order</a>
                <a href="#"><i className="w-icon-sale"></i>Daily Deals</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Mobmenu/>
    </div>
  );
};

export default Header;



