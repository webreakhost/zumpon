


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import addToWishlist from "../../helpers/addToWishlist";

// const Fashion = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFashionProducts = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/product/allproduct`);
//         setProducts(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFashionProducts();
//   }, []);

//   return (
//     <div className="col-lg-9 col-sm-8">
//       <div
//         className="swiper-container swiper-theme"
//         data-swiper-options={`{
//           "spaceBetween": 20,
//           "slidesPerView": 2,
//           "breakpoints": {
//               "992": { "slidesPerView": 3 },
//               "1200": { "slidesPerView": 4 }
//           }
//         }`}
//       >
//         <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
//           {loading ? (
//             <p>Loading products...</p>
//           ) : error ? (
//             <p className="text-danger">{error}</p>
//           ) : products.length === 0 ? (
//             <p>No products found in this category.</p>
//           ) : (
//             products.slice(-6).map((product) => (
//               <div key={product._id} className="swiper-slide product-col">
//                 <div className="product-wrap product text-center">
//                   <figure className="product-media">
//                 <a href={`/${product.name}`}>
//                     {/* <Link to={} className="block"> */}
//                       <img
//                         src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                         alt={product.name}
//                         width="216"
//                         height="243"
//                         style={{ objectFit: "cover", width: "216px", height: "243px" }}
//                       />
//                     </a>
//                     <div className="product-action-vertical">
//                       <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                      
//                       <a
//                          href="#"
//                         onClick={(e) => addToWishlist(e, product._id)}
//                         className="btn-product-icon btn-wishlist w-icon-heart"
//                         title="Add to wishlist"
//                        ></a>
                     
//                     </div>
//                   </figure>
//                   <div className="product-details">
//                     <h4 className="product-name">
//                       <a href="product-default.html">{product.name}</a>
//                     </h4>
                   

// <div className="flex justify-center items-center mt-1">
//   <div className="text-orange-400 text-3xl">
//     {"★".repeat(product.averageRating || 0)}
//     {"☆".repeat(5 - (product.averageRating || 0))}
//   </div>
//   <span className="ml-1 text-sm text-gray-500">({product.totalReviews || 0})</span>
// </div>
//                     <div className="product-price">
//                       <ins className="new-price">${product.price.toFixed(2)}</ins>
//                       {product.oldPrice && <del className="old-price">${product.oldPrice.toFixed(2)}</del>}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

// export default Fashion;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import addToWishlist from "../../helpers/addToWishlist";

const Fashion = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFashionProducts = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/product/allproduct`);
        setProducts(response.data.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchFashionProducts();
  }, []);

  return (
    <div className="col-lg-9 col-sm-8">
      <div
        className="swiper-container swiper-theme"
        data-swiper-options={`{
          "spaceBetween": 20,
          "slidesPerView": 2,
          "breakpoints": {
              "992": { "slidesPerView": 3 },
              "1200": { "slidesPerView": 4 }
          }
        }`}
      >
        <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : products.length === 0 ? (
            <p>No products found in this category.</p>
          ) : (
            products.slice(-6).map((product) => (
              <div key={product._id} className="swiper-slide product-col">
                <div className="product-wrap product text-center">
                  <figure className="product-media">
                    <a href={`/${product.name}`}>
                      <img
                        src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                        alt={product.name}
                        width="216"
                        height="243"
                        style={{ objectFit: "cover", width: "216px", height: "243px" }}
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                      <a
                        href="#"
                        onClick={(e) => addToWishlist(e, product._id)}
                        className="btn-product-icon btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">{product.name}</a>
                    </h4>

                    <div className="flex justify-center items-center mt-1">
                      <div className="text-orange-400 text-3xl">
                        {"★".repeat(product.averageRating || 0)}
                        {"☆".repeat(5 - (product.averageRating || 0))}
                      </div>
                      <span className="ml-1 text-sm text-gray-500">({product.totalReviews || 0})</span>
                    </div>

                    <div className="product-price">
                      {product.price != null ? (
                        <ins className="new-price">${product.price.toFixed(2)}</ins>
                      ) : (
                        <ins className="new-price">Price not available</ins>
                      )}
                      {product.oldPrice != null && (
                        <del className="old-price">${product.oldPrice.toFixed(2)}</del>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Fashion;
