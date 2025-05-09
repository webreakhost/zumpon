import React from 'react';

const Frewuenty = () => {
  return (
    <div className="frequently-bought-together mt-5">
      <h2 className="title title-underline">Frequently Bought Together</h2>
      <div className="bought-together-products row mt-8 pb-4">
        <div className="product product-wrap text-center">
          <figure className="product-media">
            <img
              src="/assets/images/products/default/bought-1.jpg"
              alt="Product"
              width="138"
              height="138"
            />
            <div className="product-checkbox">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="product_check1"
                name="product_check1"
              />
              <label htmlFor="product_check1"></label>
            </div>
          </figure>
          <div className="product-details">
            <h4 className="product-name">
              <a href="#">Electronics Black Wrist Watch</a>
            </h4>
            <div className="product-price">$40.00</div>
          </div>
        </div>

        <div className="product product-wrap text-center">
          <figure className="product-media">
            <img
              src="/assets/images/products/default/bought-2.jpg"
              alt="Product"
              width="138"
              height="138"
            />
            <div className="product-checkbox">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="product_check2"
                name="product_check2"
              />
              <label htmlFor="product_check2"></label>
            </div>
          </figure>
          <div className="product-details">
            <h4 className="product-name">
              <a href="#">Apple Laptop</a>
            </h4>
            <div className="product-price">$1,800.00</div>
          </div>
        </div>

        <div className="product product-wrap text-center">
          <figure className="product-media">
            <img
              src="/assets/images/products/default/bought-3.jpg"
              alt="Product"
              width="138"
              height="138"
            />
            <div className="product-checkbox">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="product_check3"
                name="product_check3"
              />
              <label htmlFor="product_check3"></label>
            </div>
          </figure>
          <div className="product-details">
            <h4 className="product-name">
              <a href="#">White Lenovo Headphone</a>
            </h4>
            <div className="product-price">$34.00</div>
          </div>
        </div>

        <div className="product-button">
          <div className="bought-price font-weight-bolder text-primary ls-50">
            $1,874.00
          </div>
          <div className="bought-count">For 3 items</div>
          <a href="cart.html" className="btn btn-dark btn-rounded">
            Add All To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Frewuenty;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { BACKENDURL } from '../../config/config';

// const Frewuenty = () => {
//   const { shopName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVendorProducts = async () => {
//       try {
//         const encodedShopName = encodeURIComponent(shopName);
//         const response = await axios.get(`${BACKENDURL}/api/v1/product/vendor/${encodedShopName}`);
//         setProducts(response.data.data.slice(0, 3)); // limit to 3 products
//       } catch (err) {
//         setError("Failed to load frequently bought products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVendorProducts();
//   }, [shopName]);

//   if (loading) {
//     return <div className="text-center text-gray-500 mt-10">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 mt-10">{error}</div>;
//   }

//   if (products.length === 0) {
//     return <div className="text-center text-gray-500 mt-10">No frequently bought products found.</div>;
//   }

//   const totalPrice = products.reduce((acc, p) => acc + (p.discountedPrice || p.price), 0);

//   return (
//     <div className="frequently-bought-together mt-5">
//       <h2 className="title title-underline">Frequently Bought Together</h2>
//       <div className="bought-together-products row mt-8 pb-4">
//         {products.map((product, index) => (
//           <div key={product._id} className="product product-wrap text-center">
//             <figure className="product-media">
//               <img
//                 src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
//                 alt={product.name}
//                 width="138"
//                 height="138"
//               />
//               <div className="product-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-checkbox"
//                   id={`product_check${index + 1}`}
//                   name={`product_check${index + 1}`}
//                 />
//                 <label htmlFor={`product_check${index + 1}`}></label>
//               </div>
//             </figure>
//             <div className="product-details">
//               <h4 className="product-name">
//                 <a href={`/product/${product._id}`}>{product.name}</a>
//               </h4>
//               <div className="product-price">
//                 ${product.discountedPrice || product.price}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="product-button">
//           <div className="bought-price font-weight-bolder text-primary ls-50">
//             ${totalPrice.toFixed(2)}
//           </div>
//           <div className="bought-count">For {products.length} items</div>
//           <a href="cart.html" className="btn btn-dark btn-rounded">
//             Add All To Cart
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Frewuenty;



// import React, { useEffect, useState } from "react";
// import { BACKENDURL } from "../../config/config";

// const Frewuenty = ({ shopName }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchFrequentProducts = async () => {
//       try {
//         const response = await fetch(`${BACKENDURL}/api/v1/product/shopwise?shopName=${shopName}`);
//         const data = await response.json();
//         if (data.success) {
//           setProducts(data.products);
//         } else {
//           console.error("Failed to fetch shopwise products:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching frequent products:", error);
//       }
//     };

//     if (shopName) {
//       fetchFrequentProducts();
//     }
//   }, [shopName]);

//   return (
//     <div className="frequent-products">
//       <h3 className="text-lg font-semibold mb-4">More products from {shopName}</h3>
//       <div className="row">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div className="col-md-3 mb-4" key={product._id}>
//               <div className="card">
//                 <img
//                   src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0]?.split("\\").pop()}`}
//                   alt={product.name}
//                   className="card-img-top"
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">₹{product.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No other products from this shop.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Frewuenty;
