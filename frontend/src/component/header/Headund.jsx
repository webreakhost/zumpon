



import React, { useEffect, useState } from 'react';
import { BACKENDURL } from '../../config/config';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Headund = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="main-nav">
      <ul className="menu active-underline">
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vendor-store-list">Shop</Link>
          <ul className="megamenu">
            <li>
              <h4 className="menu-title">Shop Pages</h4>
              <ul>
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link to={`/category/${category._id}`}>{category.name}</Link>
                  </li>
                ))}
                {/* <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                <li><a href="shop-horizontal-filter.html">Horizontal Filter<span className="tip tip-hot">Hot</span></a></li>
                <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span className="tip tip-new">New</span></a></li>
                <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a></li>
                <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                <li><a href="shop-both-sidebar.html">Both Sidebar</a></li> */}
              </ul>
            </li>
            {/* <li>
              <h4 className="menu-title">Shop Layouts</h4>
              <ul>
                <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                <li><a href="shop-list.html">List Mode</a></li>
                <li><a href="shop-list-sidebar.html">List Mode With Sidebar</a></li>
              </ul>
            </li>
            <li>
              <h4 className="menu-title">Product Pages</h4>
              <ul>
                <li><a href="product-variable.html">Variable Product</a></li>
                <li><a href="product-featured.html">Featured & Sale</a></li>
                <li><a href="product-accordion.html">Data In Accordion</a></li>
                <li><a href="product-section.html">Data In Sections</a></li>
                <li><a href="product-swatch.html">Image Swatch</a></li>
                <li><a href="product-extended.html">Extended Info</a></li>
                <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
                <li><a href="product-video.html">360° & Video<span className="tip tip-new">New</span></a></li>
              </ul>
            </li>
            <li>
              <h4 className="menu-title">Product Layouts</h4>
              <ul>
                <li><a href="product-default.html">Default<span className="tip tip-hot">Hot</span></a></li>
                <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                <li><a href="product-grid.html">Grid Images</a></li>
                <li><a href="product-masonry.html">Masonry</a></li>
                <li><a href="product-gallery.html">Gallery</a></li>
                <li><a href="product-sticky-info.html">Sticky Info</a></li>
                <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
                <li><a href="product-sticky-both.html">Sticky Both</a></li>
              </ul>
            </li> */}
          </ul>
        </li>
        <li>
          <a href="/vendor-store-list">Vendor</a>
          <ul>
            <li>
              <a href="/vendor-store-list">Store Listing</a>
              <ul>
                <li><Link to="/vendor-store-list">Store listing 1</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="/about-us">Pages</a>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/become-a-vendor">Become A Vendor</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/my-account">My Account</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Headund;



