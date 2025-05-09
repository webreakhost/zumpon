import React from 'react'

const Addsprd = () => {
    return (
        <div className="col-lg-3 mb-4">
            <div className="widget widget-products widget-products-bordered h-100">
            <div className="widget-body br-sm h-100">
                    <h4 className="title-sm title-underline font-weight-bolder ls-normal mb-2">
                        Top 20 Best Seller
                    </h4>
                    <div className="swiper">
                        <div
                            className="swiper-container swiper-theme nav-top"
                            data-swiper-options={`{
                            "slidesPerView": 1,
                            "spaceBetween": 20,
                            "breakpoints": {
                                "576": { "slidesPerView": 2 },
                                "768": { "slidesPerView": 3 },
                                "992": { "slidesPerView": 1 }
                            }
                        }`}
                        >
                            <div className="swiper-wrapper row cols-lg-1 cols-md-3"></div>
                            <div className="swiper-slide product-widget-wrap">
                                
                            </div>
                            <div className="product product-widget bb-no">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img
                                            src="assets/images/demos/demo1/products/2-2.jpg"
                                            alt="Product"
                                            width="105"
                                            height="118"
                                        />
                                    </a>
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name">
                                        <a href="product-default.html">Professional Pixel Camera</a>
                                    </h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: "60%" }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$215.68</ins>
                                        <del className="old-price">$230.45</del>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="swiper-slide product-widget-wrap">
                           
                           
                            <div className="product product-widget">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img
                                            src="assets/images/demos/demo1/products/2-6.jpg"
                                            alt="Product"
                                            width="105"
                                            height="118"
                                        />
                                    </a>
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name">
                                        <a href="product-default.html">Wash Machine</a>
                                    </h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: "100%" }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$215.68</ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide product-widget-wrap">
                            <div className="product product-widget bb-no">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img
                                            src="assets/images/demos/demo1/products/2-7.jpg"
                                            alt="Product"
                                            width="105"
                                            height="118"
                                        />
                                    </a>
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name">
                                        <a href="product-default.html">Security Guard</a>
                                    </h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: "100%" }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$320.00</ins>
                                    </div>
                                </div>
                            </div>
                            <div className="product product-widget bb-no">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img
                                            src="assets/images/demos/demo1/products/2-8.jpg"
                                            alt="Product"
                                            width="105"
                                            height="118"
                                        />
                                    </a>
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name">
                                        <a href="product-default.html">Apple Super Notecom</a>
                                    </h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: "100%" }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$243.30</ins>
                                        <del className="old-price">$253.50</del>
                                    </div>
                                </div>
                            </div>
                            <div className="product product-widget">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img
                                            src="assets/images/demos/demo1/products/2-9.jpg"
                                            alt="Product"
                                            width="105"
                                            height="118"
                                        />
                                    </a>
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name">
                                        <a href="product-default.html">HD Television</a>
                                    </h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: "60%" }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$450.68</ins>
                                        <del className="old-price">$500.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="swiper-button-next"></button>
                    <button className="swiper-button-prev"></button>
                </div>
                
            </div>
        </div>
    
  )
};


export default Addsprd
