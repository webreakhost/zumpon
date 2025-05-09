




import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Context from '../../context/index';


const Headtop = () => {
  const { user } = useContext(Context) || {}; // Get user from Context
  const reduxUser = useSelector((state) => state.user.user); // Get user from Redux state
  const currentUser = user || reduxUser; // Prioritize Context over Redux

  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <p className="welcome-msg">Welcome to Wolmart Store! Enjoy your shopping.</p>
        </div>
        <div className="header-right">
          {/* Currency Dropdown */}
          <div className="dropdown">
            <a href="#currency">USD</a>
            <div className="dropdown-box">
              <a href="#USD">USD</a>
              <a href="#EUR">EUR</a>
            </div>
          </div>

          {/* Language Dropdown */}

           {/* <div className="dropdown d-lg-show">
            <a href="#language">
              <img
                src="assets/images/flags/eng.png"
                alt="ENG Flag"
                width="14"
                height="8"
                className="dropdown-image"
              />{' '}
              ENG
            </a>
            <div className="dropdown-box">
              <a href="#ENG">
                <img
                  src="assets/images/flags/eng.png"
                  alt="ENG Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />{' '}
                ENG
              </a>
              <a href="#FRA">
                <img
                  src="assets/images/flags/fra.png"
                  alt="FRA Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />{' '}
                FRA
              </a>
            </div>
            
          </div>  */}

          


          <span className="divider d-lg-show"></span>
          <a href="blog" className="d-lg-show">
            Blog
          </a>
          <a href="contact-us" className="d-lg-show">
            Contact Us
          </a>

          {currentUser ? (
            <a href="/my-account" className="">
              My Account
            </a>
          ) : (
            <>
            {/* w-icon-account */}
              <a href="/login" className=" login sign-in">
                <i className=" w-icon-account">Login</i>
              </a>
              {/* <span className="delimiter d-lg-show">/</span>
              <a href="/signup" className="ml-0 login register d-lg-show">
                Register
              </a> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headtop;




