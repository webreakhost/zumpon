import React from 'react'

const Aboutmid = () => {
  return (
    <section className="boost-section pt-10 pb-10">
    <div className="container mt-10 mb-9">
        <div className="row align-items-center mb-10">
            <div className="col-md-6 mb-8">
                <figure className="br-lg">
                    <img src="assets/images/pages/about_us/3.jpg" alt="Banner"
                        width="610" height="450" style={{backgroundColor: '#9E9DA2'}}/>
                </figure>
            </div>
            <div className="col-md-6 pl-lg-8 mb-8">
                <h4 className="title text-left">We Boost Our Clients’ Bottom
                    Line by Optimizing Their Growth Potential</h4>
                <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Venenatis tellus in.
                    metus vulputate eu scelerisque felis. Vel pretium lectus qua .
                    Arpis massa. Nunc id cursus metus ididunt ut labore metus vulputate episcing.</p>
                <a href="#" className="btn btn-dark btn-rounded">Visit Our Store</a>
            </div>
        </div>

        <div className="awards-wrapper">
            <h4 className="title title-center font-weight-bold mb-10 pb-1 ls-25">Awards</h4>
            <div className="swiper-container swiper-theme" data-swiper-options="{
                'spaceBetween': 20,
                'slidesPerView': 1,
                'breakpoints': {
                    '768': {
                        'slidesPerView': 2
                    },
                    '992': {
                        'slidesPerView': 3
                    },
                    '1200': {
                        'slidesPerView': 4
                    }
                }
            }">
                <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2 cols-1">
                    <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                            <figure>
                                <img src="assets/images/pages/about_us/1.png" alt="Award Image" width="109" height="105" />
                            </figure>
                            <p>Winner Seo Master MAGT<br/>
                                Smart Start Award 2018</p>
                        </div>
                    </div>
                    <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                            <figure>
                                <img src="assets/images/pages/about_us/2.png" alt="Award Image" width="109" height="105" />
                            </figure>
                            <p>Top Social Media Agencies<br/>
                                Next Partner 2019</p>
                        </div>
                    </div>
                    <div className="swiper-slide image-box-wrapper mt-3">
                        <div className="image-box text-center">
                            <figure>
                                <img src="assets/images/pages/about_us/3.png" alt="Award Image" width="109" height="105" />
                            </figure>
                            <p>5 Fastest Growing Abstract<br/>
                                Solution Providers 2020</p>
                        </div>
                    </div>
                    <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                            <figure>
                                <img src="assets/images/pages/about_us/4.png" alt="Award Image" width="109" height="105" />
                            </figure>
                            <p>National Excellence Agencie<br/>
                                Award Winner 2021</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aboutmid
