import React from 'react'

const Aboutmain = () => {
  return (
    <div className="container">
    <section className="introduce mb-10 pb-10">
        <h2 className="title title-center">
            We’re Devoted Marketing<br/>Consultants Helping Your Business Grow
        </h2>
        <p className=" mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            labore et dolore magna aliqua. Venenatis tellu metus</p>
        <figure className="br-lg">
            <img src="assets/images/pages/about_us/1.jpg" alt="Banner" 
                width="1240" height="540" style={{ backgroundColor: '#D0C1AE' }}
                />
        </figure>
    </section>

    <section className="customer-service mb-7">
        <div className="row align-items-center">
            <div className="col-md-6 pr-lg-8 mb-8">
                <h2 className="title text-left">We Provide Continuous &amp; Kind Service for Customers</h2>
                <div className="accordion accordion-simple accordion-plus">
                    <div className="card border-no">
                        <div className="card-header">
                            <a href="#collapse3-1" className="collapse">Customer Service</a>
                        </div>
                        <div className="card-body expanded" id="collapse3-1">
                            <p className="mb-0">
                                Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                sed do eius mod tempor incididunt ut labore
                                et dolore magna aliqua. Venenatis tell
                                us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a href="#collapse3-2" className="expand">Online Consultation</a>
                        </div>
                        <div className="card-body collapsed" id="collapse3-2">
                            <p className="mb-0">
                                Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                sed do eius mod tempor incididunt ut labore
                                et dolore magna aliqua. Venenatis tell
                                us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a href="#collapse3-3" className="expand">Sales Management</a>
                        </div>
                        <div className="card-body collapsed" id="collapse3-3">
                            <p className="mb-0">
                                Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                sed do eius mod tempor incididunt ut labore
                                et dolore magna aliqua. Venenatis tell
                                us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-8">
                <figure className="br-lg">
                    <img src="assets/images/pages/about_us/2.jpg" alt="Banner"
                        width="610" height="500" style={{ backgroundColor: '#CECECC' }}
                        />
                        
                </figure>
            </div>
        </div>
    </section>

    <section className="count-section mb-10 pb-5">
        <div className="swiper-container swiper-theme" data-swiper-options="{
            'slidesPerView': 1,
            'breakpoints': {
                '768': {
                    'slidesPerView': 2
                },
                '992': {
                    'slidesPerView': 3
                }
            }
        }">
            <div className="swiper-wrapper row cols-lg-3 cols-md-2 cols-1">
                <div className="swiper-slide counter-wrap">
                    <div className="counter text-center">
                        <span className="count-to" data-to="15">0</span>
                        <span>M+</span>
                        <h4 className="title title-center">Products For Sale</h4>
                        <p>Diam maecenas ultricies mi eget mauris<br/>
                            Nibh tellus molestie nunc non</p>
                    </div>
                </div>
                <div className="swiper-slide counter-wrap">
                    <div className="counter text-center">
                        <span>$</span>
                        <span className="count-to" data-to="25">0</span>
                        <span>B+</span>
                        <h4 className="title title-center">Community Earnings</h4>
                        <p>Diam maecenas ultricies mi eget mauris<br/>
                            Nibh tellus molestie nunc non</p>
                    </div>
                </div>
                <div className="swiper-slide counter-wrap">
                    <div className="counter text-center">
                        <span className="count-to" data-to="100">0</span>
                        <span>M+</span>
                        <h4 className="title title-center">Growing Buyers</h4>
                        <p>Diam maecenas ultricies mi eget mauris<br/>
                            Nibh tellus molestie nunc non</p>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
</div>
  )
}

export default Aboutmain



