



import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategoryBanner = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/vendor/stores`);
        setStores(response.data.stores || []); // Ensure an array is returned
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* 🔹 Banner Section */}
      <div
        className="relative flex items-center justify-center bg-yellow-400 h-60 md:h-72 lg:h-80 rounded-md shadow-md overflow-hidden"
        style={{
          backgroundImage: `/assets/images/shop/banner1.jpg`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        // style="background-image: url(assets/images/shop/banner1.jpg); background-color: #FFC74E;">
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h4 className="text-lg md:text-xl font-semibold">Accessories Collection</h4>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            Smart Wrist Watches
          </h3>
          <a
            href="shop-banner-sidebar.html"
            className="mt-4 inline-block px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            Discover Now →
          </a>
        </div>
      </div>

      {/* 🔹 Store Brands Slider */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-center mb-6">Top Brands</h2>
        {stores.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            slidesPerView={6}
            spaceBetween={20}
            navigation
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="relative"
          >
            {stores.map((store) => {
              const imageUrl = store.logo
                ? `${BACKENDURL}${store.logo}`
                : "/assets/images/shop/default-brand.png"; // Default image

              return (
                <SwiperSlide key={store._id} className="flex justify-center">
                  <figure className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center border border-gray-200 rounded-md shadow-md bg-white hover:shadow-lg transition">
                    <a href={`/vendor/${store.shopName}`}>
                    <img
                      src={imageUrl}
                      alt={store.name}
                                    
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "/assets/images/shop/default-brand.png";
                      }}
                    />
                    </a>
                    {/* <img
                      src={imageUrl}
                      alt={store.name}
                     
                
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "/assets/images/shop/default-brand.png";
                      }}
                    /> */}
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">Loading stores...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBanner;
