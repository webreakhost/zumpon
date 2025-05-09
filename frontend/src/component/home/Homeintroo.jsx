





import React, { useState, useEffect } from "react";


const slides = [
  {
    id: 1,
    background: "assets/images/demos/demo1/sliders/slide-1.jpg",
    image: "assets/images/demos/demo1/sliders/shoes.png",
    title: "RUNNING SHOES",
    subtitle: "Custom Men’s",
    description: "Sale up to 30% OFF",
    link: "shop-list.html",
  },
  {
    id: 2,
    background: "assets/images/demos/demo1/sliders/slide-2.jpg",
    image: "assets/images/demos/demo1/sliders/men.png",
    title: "Hot & Packback",
    subtitle: "Mountain-Climbing",
    description: "Only until the end of this week.",
    link: "shop-banner-sidebar.html",
  },
  {
    id: 3,
    background: "assets/images/demos/demo1/sliders/slide-3.jpg",
    image: "assets/images/demos/demo1/sliders/skate.png",
    title: "Roller-skate",
    subtitle: "Trending Collection",
    description: "Top weekly Seller",
    link: "shop-list.html",
  },
];

const Homeintroo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="intro-section">
      <div
        className="banner banner-fixed intro-slide"
        style={{
          backgroundImage: `url(${slides[currentSlide].background})`,
          backgroundColor: "#ebeef2",
        }}
      >
        {/* container */}
        <div className="container flex flex-col float-right gap-10">
          <div className="">
          <figure className="slide-image skrollable slide-animate ml-20">
            <img src={slides[currentSlide].image} alt="Banner" width="474" height="397" />
          </figure>
          </div>
         
          <div className="banner-content y-50 text-right mr-10">
            <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate">
              {slides[currentSlide].subtitle}
            </h5>
            <h3 className="banner-title font-weight-bolder ls-25 lh-1 slide-animate">
              {slides[currentSlide].title}
            </h3>
            <p className="font-weight-normal text-default slide-animate">
              {slides[currentSlide].description}
            </p>
            <a href={slides[currentSlide].link} className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate">
              SHOP NOW<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>


        </div>
      </div>

      <button className="swiper-button-prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
        &#10094;
      </button>
      <button className="swiper-button-next" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
        &#10095;
      </button>
    </section>
  );
};

export default Homeintroo;



