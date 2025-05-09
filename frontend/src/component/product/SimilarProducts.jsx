



import { useEffect, useState } from "react";
import { BACKENDURL } from "../../config/config";
import { Link } from "react-router-dom";

const SimilarProducts = ({ name }) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (!name) {
      console.error("❌ No productId provided to SimilarProducts component.");
      return;
    }

    const fetchSimilarProducts = async () => {
      try {
        // console.log("✅ Fetching similar products for productId:", productId);

        const response = await fetch(
          `${BACKENDURL}/api/v1/product/products/${name}/similar`
        );

        const data = await response.json();
        // console.log("✅ API Response:", data);

        if (data.success && Array.isArray(data.data)) {
          setSimilarProducts(data.data);
        } else {
          console.warn("⚠️ Unexpected API response format:", data);
          setSimilarProducts([]);
        }
      } catch (error) {
        console.error("❌ Error fetching similar products:", error);
      }
    };

    fetchSimilarProducts();
  }, [name]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Similar Products</h2>
      {similarProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Link to={`/${product.name}`} className="block">
              <img
                src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                alt="Product"
                className="w-full h-[260px] object-cover rounded-lg"
              />

              </Link>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                <p className="text-gray-600">Price: ₹{product.price}</p>
                <p className="text-gray-500 text-sm">Stock: {product.stock} available</p>
                <Link to={`/product/${product.name}`} className="block">
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  View Product
                </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No similar products found.</p>
      )}
    </div>
  );
};

export default SimilarProducts;




// import { useEffect, useState } from "react";
// import { BACKENDURL } from "../../config/config";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const SimilarProducts = ({ name }) => {
//   const [similarProducts, setSimilarProducts] = useState([]);

//   useEffect(() => {
//     if (!name) return;

//     const fetchSimilarProducts = async () => {
//       try {
//         const response = await fetch(
//           `${BACKENDURL}/api/v1/product/products/${name}/similar`
//         );
//         const data = await response.json();

//         if (data.success && Array.isArray(data.data)) {
//           setSimilarProducts(data.data);
//         } else {
//           setSimilarProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching similar products:", error);
//       }
//     };

//     fetchSimilarProducts();
//   }, [name]);

//   return (
//     <section className="related-product-section">
//       <div className="title-link-wrapper mb-4">
//         <h4 className="title">Related Products</h4>
//         <Link
//           to="/products"
//           className="btn btn-dark btn-link btn-slide-right btn-icon-right"
//         >
//           More Products<i className="w-icon-long-arrow-right"></i>
//         </Link>
//       </div>
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={20}
//         navigation
//         breakpoints={{
//           0: { slidesPerView: 2 },
//           576: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           992: { slidesPerView: 3 },
//         }}
//         className="swiper-container swiper-theme"
//       >
//         <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
//           {similarProducts.map((product) => (
//             <SwiperSlide key={product._id} className="swiper-slide product">
//               <figure className="product-media">
//                 <Link to={`/product/${product.name}`}>
//                   <img
//                     src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                     alt="Product"
//                     width="300"
//                     height="338"
//                   />
//                 </Link>
//                 <div className="product-action-vertical">
//                   <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
//                   <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
//                   <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
//                 </div>
//                 <div className="product-action">
//                   <Link to={`/product/${product.name}`} className="btn-product btn-quickview" title="Quick View">
//                     Quick View
//                   </Link>
//                 </div>
//               </figure>
//               <div className="product-details">
//                 <h4 className="product-name">
//                   <Link to={`/product/${product.name}`}>{product.name}</Link>
//                 </h4>
//                 <div className="ratings-container">
//                   <div className="ratings-full">
//                     <span className="ratings" style={{ width: "100%" }}></span>
//                     <span className="tooltiptext tooltip-top"></span>
//                   </div>
//                   <Link to={`/product/${product.name}`} className="rating-reviews">(reviews)</Link>
//                 </div>
//                 <div className="product-pa-wrapper">
//                   <div className="product-price">₹{product.price}</div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default SimilarProducts;
