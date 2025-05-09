import React from 'react'

const Aboutend = () => {
  return (
    <section class="member-section mt-10 pt-9 mb-10 pb-4">
                    <div class="container">
                        <h4 class="title title-center mb-3">Meet Our Leaders</h4>
                        <p class="text-center mb-8">Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam<br/>
                            maecenas ultricies mi eget mauris. Volutpat ac</p>
                        <div class="swiper-container swiper-theme" data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 1,
                            'breakpoints': {
                                '576': {
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
                            <div class="swiper-wrapper row cols-xl-4 cols-lg-3 cols-sm-2 cols-1">
                                <div class="swiper-slide member-wrap">
                                    <figure class="br-lg">
                                        <img src="assets/images/pages/about_us/4.jpg" alt="Member" width="295" height="332" />
                                        <div class="overlay">
                                            <div class="social-icons">
                                                <a href="#" class="social-icon social-facebook w-icon-facebook"></a>
                                                <a href="#" class="social-icon social-twitter w-icon-twitter"></a>
                                                <a href="#" class="social-icon social-instagram w-icon-instagram"></a>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="member-info text-center">
                                        <h4 class="member-name">John Doe</h4>
                                        <p class="text-uppercase">Founder &amp; CEO</p>
                                    </div>
                                </div>
                                <div class="swiper-slide member-wrap">
                                    <figure class="br-lg">
                                        <img src="assets/images/pages/about_us/5.jpg" alt="Member" width="295" height="332" />
                                        <div class="overlay">
                                            <div class="social-icons">
                                                <a href="#" class="social-icon social-facebook w-icon-facebook"></a>
                                                <a href="#" class="social-icon social-twitter w-icon-twitter"></a>
                                                <a href="#" class="social-icon social-instagram w-icon-instagram"></a>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="member-info text-center">
                                        <h4 class="member-name">Jessica Doe</h4>
                                        <p class="text-uppercase">Marketing</p>
                                    </div>
                                </div>
                                <div class="swiper-slide member-wrap">
                                    <figure class="br-lg">
                                        <img src="assets/images/pages/about_us/6.jpg" alt="Member" width="295" height="332" />
                                        <div class="overlay">
                                            <div class="social-icons">
                                                <a href="#" class="social-icon social-facebook w-icon-facebook"></a>
                                                <a href="#" class="social-icon social-twitter w-icon-twitter"></a>
                                                <a href="#" class="social-icon social-instagram w-icon-instagram"></a>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="member-info text-center">
                                        <h4 class="member-name">Rick Edward Doe</h4>
                                        <p class="text-uppercase">Developer</p>
                                    </div>
                                </div>
                                <div class="swiper-slide member-wrap">
                                    <figure class="br-lg">
                                        <img src="assets/images/pages/about_us/7.jpg" alt="Member" width="295" height="332" />
                                        <div class="overlay">
                                            <div class="social-icons">
                                                <a href="#" class="social-icon social-facebook w-icon-facebook"></a>
                                                <a href="#" class="social-icon social-twitter w-icon-twitter"></a>
                                                <a href="#" class="social-icon social-instagram w-icon-instagram"></a>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="member-info text-center">
                                        <h4 class="member-name">Melinda Wolosky</h4>
                                        <p class="text-uppercase">Design</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </section>
  )
}

export default Aboutend
