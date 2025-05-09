



import React from 'react';

const Headerend = () => {
  return (
    <div>
      {/* <ul> */}
        <li className='ml-3'>
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
            <li>
              <div className="banner-fixed menu-banner menu-banner2">
                <figure>
                  <img src="assets/images/menu/banner-2.jpg" alt="Menu Banner" width="235" height="347" />
                </figure>
                <div className="banner-content">
                  <div className="banner-price-info mb-1 ls-normal">
                    Get up to <strong className="text-primary text-uppercase">20% Off</strong>
                  </div>
                  <h3 className="banner-title ls-normal">Hot Sales</h3>
                  <a href="shop-banner-sidebar.html" className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right">
                    Shop Now<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <div className='px-5 py-1 '>
          <hr/>

        </div>
        <li className='ml-3'>
          <a href="shop-fullwidth-banner.html">
            <i className="w-icon-home"></i>Home & Garden
          </a>
          <ul className="megamenu">
            <li>
              <h4 className="menu-title">Bedroom</h4>
              <hr className="divider" />
              
              <h4 className="menu-title mt-1">Living Room</h4>
              <hr className="divider" />
              
            </li>
            <li>
              <h4 className="menu-title">Office</h4>
              <hr className="divider" />
              
            </li>
            <li>
              <div className="menu-banner banner-fixed menu-banner3">
                <figure>
                  <img src="assets/images/menu/banner-3.jpg" alt="Menu Banner" width="235" height="461" />
                </figure>
                <div className="banner-content">
                  <h4 className="banner-subtitle font-weight-normal text-white mb-1">Restroom</h4>
                  <h3 className="banner-title font-weight-bolder text-white ls-normal">Furniture Sale</h3>
                  <div className="banner-price-info text-white font-weight-normal ls-25">
                    Up to <span className="text-secondary text-uppercase font-weight-bold">25% Off</span>
                  </div>
                  <a href="shop-banner-sidebar.html" className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right">
                    Shop Now<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
      {/* </ul> */}
    </div>
  );
};

export default Headerend;