



import React from 'react';

const Banner2 = () => {
  return (
    <div className="col-lg-3 col-sm-4 mb-4">
      <div 
        className="banner h-100 br-sm" 
        style={{
          backgroundImage: "url(assets/images/demos/demo1/banners/2.jpg)",
          backgroundColor: "#ebeced"
        }}
      >
        <div className="banner-content content-top">
          <h5 className="banner-subtitle font-weight-normal mb-2">Weekend Sale</h5>
          <hr className="banner-divider bg-dark mb-2" />
          <h3 className="banner-title font-weight-bolder ls-25 text-uppercase">
            New Arrivals<br /> 
            <span className="font-weight-normal text-capitalize">Collection</span>
          </h3>
          <a 
            href="shop-banner-sidebar.html" 
            className="btn btn-dark btn-outline btn-rounded btn-sm"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
