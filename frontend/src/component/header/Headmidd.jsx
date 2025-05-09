
import React, { useState,useEffect } from "react";

import { BACKENDURL } from "../../config/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Mobmenu from "./Mobmenu";
// import Mobmenu from "../mobile/Mobmenu";

const Headmidd = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  
  // const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Use navigate for redirection

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const res = await fetch(`${BACKENDURL}/api/v1/cart/countcart`, {
          
          credentials: "include"
        });
        const data = await res.json();
        if (data.success) {
          console.log(data.data.count)
          setCartCount(data.data.count);
        }
      } catch (error) {
        console.log("Error fetching cart count", error);
      }
    };

    fetchCartCount();
  }, []);


  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-left mr-md-4">
        <button 
          className="lg:hidden text-4xl p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>        
          
          <a href="/" className="logo ml-lg-0">
  <img src="/assets/images/zumpon logo 04.png" alt="logo" width="144" height="45" />
</a>

          <form onSubmit={handleSearch} className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper">
            <div className="select-box">
              <select id="category" name="category">
                <option value="">All Categories</option>
                <option value="4">Fashion</option>
                <option value="5">Furniture</option>
                <option value="6">Shoes</option>
                <option value="7">Sports</option>
                <option value="8">Games</option>
                <option value="9">Computers</option>
                <option value="10">Electronics</option>
                <option value="11">Kitchen</option>
                <option value="12">Clothing</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              name="search"
              id="search"
              placeholder="Search in..."
              required
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search"></i>
            </button>
          </form>
        </div>

        <div className="header-right ml-4">
          <div className="header-call d-xs-show d-lg-flex align-items-center">
            <a href="tel:#" className="w-icon-call"></a>
            <div className="call-info d-lg-show">
              <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                <a href="https://portotheme.com/cdn-cgi/l/email-protection#496a" className="text-capitalize">
                  Live Chat
                </a>{" "}
                or :
              </h4>
              <a href="tel:#" className="phone-number font-weight-bolder ls-50">
                0(800)123-456
              </a>
            </div>
          </div>

          <a className="wishlist label-down link d-xs-show" href="/wishlist">
            <i className="w-icon-heart"></i>
            <span className="wishlist-label d-lg-show">Wishlist</span>
          </a>
          

          <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
            <div className="cart-overlay"></div>
            <a href="/cart" className="cart-toggle label-down link">
              <i className="w-icon-cart">
                <span className="cart-count">{cartCount}</span>
              </i>
              <span className="cart-label">Cart</span>
            </a>



            <div className="dropdown-box">
              <div className="cart-header">
                <span>Shopping Cart</span>
                <a href="/cart" className="btn-close">
                  Close<i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
              <div className="products">
                <div className="product product-cart">
                  <div className="product-detail">
                    <a href="product-default.html" className="product-name">
                      Beige knitted elastic runner shoes
                    </a>
                    <div className="price-box">
                      <span className="product-quantity">1</span>
                      <span className="product-price">$25.68</span>
                    </div>
                  </div>
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src="assets/images/cart/product-1.jpg" alt="product" height="84" width="94" />
                    </a>
                  </figure>
                  <button className="btn btn-link btn-close" aria-label="button">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="cart-total">
                <label>Subtotal:</label>
                <span className="price">$58.67</span>
              </div>
              <div className="cart-action">
                <a href="/cart" className="btn btn-dark btn-outline btn-rounded">
                  View Cart
                </a>
                <a href="/checkout.html" className="btn btn-primary btn-rounded">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && <Mobmenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
      {/* <SearchResults results={searchResults} loading={loading} /> */}
      
    </div>
  );
};

export default Headmidd;



