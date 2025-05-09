import React from 'react'

const Productdetnav = () => {
  return (
    <nav className="breadcrumb-nav container">
    <ul className="breadcrumb bb-no">
        <li><a href="demo1.html">Home</a></li>
        <li>Products</li>
    </ul>
    <ul className="product-nav list-style-none">
        <li className="product-nav-prev">
            <a href="#">
                <i className="w-icon-angle-left"></i>
            </a>
            <span className="product-nav-popup">
                <img src="assets/images/products/product-nav-prev.jpg" alt="Product" width="110"
                    height="110" />
                <span className="product-name">Soft Sound Maker</span>
            </span>
        </li>
        <li className="product-nav-next">
            <a href="#">
                <i className="w-icon-angle-right"></i>
            </a>
            <span className="product-nav-popup">
                <img src="assets/images/products/product-nav-next.jpg" alt="Product" width="110"
                    height="110" />
                <span className="product-name">Fabulous Sound Speaker</span>
            </span>
        </li>
    </ul>
</nav>
  )
}

export default Productdetnav
