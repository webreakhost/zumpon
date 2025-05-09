import React from "react";

const CategoryBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 pt-6 pb-8">
      {/* First Banner */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-md shadow-md">
          <img
            src="assets/images/demos/demo1/categories/1-1.jpg"
            alt="Category Banner"
            className="w-full h-80 object-cover bg-gray-200"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h5 className="text-gray-800 text-lg font-normal">
              Get up to{" "}
              <span className="text-red-500 font-bold uppercase tracking-wider">
                20% Off
              </span>
            </h5>
            <h3 className="text-xl font-bold uppercase text-gray-900">
              Sports Outfits
              <br />
              <span className="font-normal capitalize">Collection</span>
            </h3>
            <p className="text-gray-700 text-base font-normal">
              Starting at{" "}
              <span className="text-red-500 font-bold">$170.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Second Banner */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-md shadow-md">
          <img
            src="assets/images/demos/demo1/categories/1-2.jpg"
            alt="Category Banner"
            className="w-full h-80 object-cover bg-gray-700"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h5 className="text-lg text-white font-normal capitalize">
              New Arrivals
            </h5>
            <h3 className="text-xl font-bold uppercase text-white">
              Accessories
              <br />
              <span className="font-normal capitalize">Collection</span>
            </h3>
            <p className="text-white text-base font-normal capitalize">
              Only From{" "}
              <span className="text-red-500 font-bold">$90.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;

