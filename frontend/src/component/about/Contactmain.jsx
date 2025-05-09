import React from 'react'

const Contactmain = () => {
  return (
    <div>
         <section className="content-title-section mb-10">
                        <h3 className="title title-center mb-3">Contact
                            Information
                        </h3>
                        <p className="text-center">Lorem ipsum dolor sit amet,
                            consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </section>
            

                    <section className="contact-information-section mb-10">
                        <div className=" swiper-container swiper-theme " data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 1,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 2
                                },
                                '768': {
                                    'slidesPerView': 3
                                },
                                '992': {
                                    'slidesPerView': 4
                                }
                            }
                        }">
                            <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-email">
                                        <i className="w-icon-envelop-closed"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">E-mail Address</h4>
                                        <p><a href="https://portotheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7a171b13163a1f021b170a161f54191517">[email&#160;protected]</a></p>
                                    </div>
                                </div>
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-headphone">
                                        <i className="w-icon-headphone"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">Phone Number</h4>
                                        <p>(123) 456-7890 / (123) 456-9870</p>
                                    </div>
                                </div>
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-map-marker">
                                        <i className="w-icon-map-marker"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">Address</h4>
                                        <p>Lawrence, NY 11345, USA</p>
                                    </div>
                                </div>
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-fax">
                                        <i className="w-icon-fax"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">Fax</h4>
                                        <p>1-800-570-7777</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
      
    </div>
  )
}

export default Contactmain

