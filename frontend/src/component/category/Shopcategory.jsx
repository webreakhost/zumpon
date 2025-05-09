


import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
      {categories.length > 0 ? (
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
            1280: { slidesPerView: 6 }
          }}
          className="relative"
        >
          {categories.map((category) => {
            const imageUrl = category.logo
              ? `${BACKENDURL}${category.logo}`
              : "/assets/images/shop/default-category.jpg";

            return (
              <SwiperSlide key={category._id} className="flex flex-col items-center">
                <a
                  href={`/category/${category._id}`}
                  className="group block w-44 h-44 md:w-37 md:h-37 rounded-full overflow-hidden border border-gray-200 shadow-md transition-transform transform hover:scale-110"
                >
                  <img
                    src={imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/assets/images/shop/default-category.jpg";
                    }}
                  />
                </a>
                <h4 className="mt-2 text-sm md:text-base font-medium text-center">
                  <a
                    href={`/category/${category._id}`}
                    className="text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    {category.name}
                  </a>
                </h4>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">Loading categories...</p>
      )}
    </div>
  );
};

export default ShopCategory;
