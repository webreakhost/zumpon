





import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const Homeswipe = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: false,
      breakpoints: {
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });
  }, []);

  return (
    <>
      {/* <div className="swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6" data-swiper-options="{ 'slidesPerView': 1, 'loop': false }">
        <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
          <div className="swiper-slide icon-box icon-box-side icon-box-primary">
            <span className="icon-box-icon icon-shipping">
              <i className="w-icon-truck"></i>
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title font-weight-bold mb-1">Free Shipping & Returns</h4>
              <p className="text-default">For all orders over $99</p>
            </div>
          </div>
          <div className="swiper-slide icon-box icon-box-side icon-box-primary">
            <span className="icon-box-icon icon-payment">
              <i className="w-icon-bag"></i>
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title font-weight-bold mb-1">Secure Payment</h4>
              <p className="text-default">We ensure secure payment</p>
            </div>
          </div>
          <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
            <span className="icon-box-icon icon-money">
              <i className="w-icon-money"></i>
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title font-weight-bold mb-1">Money Back Guarantee</h4>
              <p className="text-default">Any back within 30 days</p>
            </div>
          </div>
          <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
            <span className="icon-box-icon icon-chat">
              <i className="w-icon-chat"></i>
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title font-weight-bold mb-1">Customer Support</h4>
              <p className="text-default">Call or email us 24/7</p>
            </div>
          </div>
        </div>
      </div> */}

<div className="mt-8 mb-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex items-center space-x-4 p-5 border rounded-lg shadow-md">
          <span className="text-blue-500 text-3xl">
            <i className="w-icon-truck"></i>
          </span>
          <div>
            <h4 className="text-lg font-semibold">Free Shipping & Returns</h4>
            <p className="text-gray-600 text-sm">For all orders over $99</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
          <span className="text-blue-500 text-3xl">
            <i className="w-icon-bag"></i>
          </span>
          <div>
            <h4 className="text-lg font-semibold">Secure Payment</h4>
            <p className="text-gray-600 text-sm">We ensure secure payment</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
          <span className="text-blue-500 text-3xl">
            <i className="w-icon-money"></i>
          </span>
          <div>
            <h4 className="text-lg font-semibold">Money Back Guarantee</h4>
            <p className="text-gray-600 text-sm">Any back within 30 days</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
          <span className="text-blue-500 text-3xl">
            <i className="w-icon-chat"></i>
          </span>
          <div>
            <h4 className="text-lg font-semibold">Customer Support</h4>
            <p className="text-gray-600 text-sm">Call or email us 24/7</p>
          </div>
        </div>
      </div>
    </div>

      <div className="row category-banner-wrapper appear-animate pt-6 pb-8">
        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed br-xs">
            <figure>
              <img src="assets/images/demos/demo1/categories/1-1.jpg" alt="Category Banner" width="610" height="160" style={{ backgroundColor: '#ecedec' }} />
            </figure>
            <div className="banner-content y-50 mt-0">
              <h5 className="banner-subtitle font-weight-normal text-dark">Get up to <span className="text-secondary font-weight-bolder text-uppercase ls-25">20% Off</span></h5>
              <h3 className="banner-title text-uppercase">Sports Outfits<br /><span className="font-weight-normal text-capitalize">Collection</span></h3>
              <div className="banner-price-info font-weight-normal">Starting at <span className="text-secondary font-weight-bolder">$170.00</span></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed br-xs">
            <figure>
              <img src="assets/images/demos/demo1/categories/1-2.jpg" alt="Category Banner" width="610" height="160" style={{ backgroundColor: '#636363' }} />
            </figure>
            <div className="banner-content y-50 mt-0">
              <h5 className="banner-subtitle font-weight-normal text-capitalize">New Arrivals</h5>
              <h3 className="banner-title text-white text-uppercase">Accessories<br /><span className="font-weight-normal text-capitalize">Collection</span></h3>
              <div className="banner-price-info text-white font-weight-normal text-capitalize">Only From <span className="text-secondary font-weight-bolder">$90.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeswipe;
