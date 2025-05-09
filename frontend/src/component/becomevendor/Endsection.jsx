



import React from 'react';

const Endsection = () => {
  return (
    <div>
      <div className="bg-grey pt-2 pt-lg-10 wolmart-sellers pb-10">
        <div className="container mt-0 mt-lg-10 mb-2 mb-lg-9">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h4 className="text-primary font-weight-bold ls-25">What they say</h4>
              <h2 className="title text-left ls-25">
                Success stories from Wolmart sellers
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing hendrerit.
                Pellentesque aliquet nibh nec urna dolor sit In nisi dapibus id, mattis
              </p>
              <a
                href="vendor-dokan-store.html"
                className="btn btn-dark btn-link btn-underline btn-icon-right"
              >
                Visit Vendors<i className="w-icon-long-arrow-right"></i>
              </a>
            </div>

            <div className="col-lg-8">
              <div className="swiper">
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options={`{
                    "spaceBetween": 20,
                    "slidesPerView": 1,
                    "loop": true,
                    "breakpoints": {
                      "576": {
                        "slidesPerView": 2
                      }
                    }
                  }`}
                >
                  <div className="swiper-wrapper row cols-sm-2">
                    <div className="swiper-slide testimonial-wrap">
                      <div className="testimonial testimonial-centered testimonial-boxed bg-white br-sm">
                        <div className="testimonial-info">
                          <figure className="testimonial-author-thumbnail">
                            <img
                              src="assets/images/agents/1-100x100.png"
                              alt="Testimonial"
                              width="100"
                              height="100"
                            />
                          </figure>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings w-full"></span>
                            </div>
                          </div>
                        </div>
                        <blockquote>
                          Lorem ipsum dolor sit amet, consectetuerd do Pellentesque
                          aliquet nib Nullamer mnequtesq nibhue aliquet urnaIn mattis...
                        </blockquote>
                        <cite className="ls-25">
                          Victoria Ventura
                          <span>Investor</span>
                        </cite>
                      </div>
                    </div>

                    {/* Repeat testimonial-slide for other testimonials */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endsection;
