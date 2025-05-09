


import React from "react";
import { BACKENDURL } from "../../config/config";
import addToCart from "../../helpers/addTocart";
import addToWishlist from "../../helpers/addToWishlist";

const ProductList = ({ products, categoryName, loading }) => {
  return (
    <div>
      <h2 className="text-center mb-4">
        {categoryName
          ? `Products in ${categoryName}`
          : "Select a category to view products"}
      </h2>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="product-wrapper row cols-xl-4 cols-lg-4 cols-md-3 cols-sm-2 cols-2">
          {products.map((product) => {
            const imageUrl = product.images?.[0]?.urls?.[0]
              ? `${BACKENDURL}/uploads/product/${product.images[0].urls[0].split("\\").pop()}`
              : "/assets/images/shop/default-product.jpg";

            // Filter only reviews that have a comment
            const validReviews = product.reviews?.filter(
              (r) => r.comment && r.comment.trim() !== ""
            );

            return (
              <div key={product._id} className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href={`/${product.name}`}>
                      <img
                        src={imageUrl}
                        alt={product.name}
                        width="300"
                        height="338"
                        style={{
                          width: "300px",
                          height: "338px",
                          objectFit: "cover",
                          backgroundColor: "#f5f5f5",
                        }}
                        className="product-image"
                        onError={(e) => {
                          e.target.src =
                            "/assets/images/shop/default-product.jpg";
                        }}
                      />
                    </a>
                    <div className="product-action-horizontal">
                      <button
                        className="btn-product-icon btn-cart w-icon-cart"
                        title="Add to cart"
                        onClick={(e) =>
                          addToCart(
                            e,
                            product._id,
                            product.availableSizes?.[0],
                            product.availableColors?.[0]
                          )
                        }
                      ></button>
                      <a
                        onClick={(e) => addToWishlist(e, product._id)}
                        className="btn-product-icon btn-wishlist w-icon-heart"
                        title="Wishlist"
                      ></a>
                      <a
                        href="#"
                        className="btn-product-icon btn-compare w-icon-compare"
                        title="Compare"
                      ></a>
                      <a
                        href={`/product/${product.name}`}
                        className="btn-product-icon btn-quickview w-icon-search"
                        title="Quick View"
                      ></a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h3 className="product-name">
                      <a href={`/product/${product.name}`}>
                        {product.name}
                      </a>
                    </h3>
                    <div className="flex justify-center items-center mt-1">
  <div className="text-orange-400 text-3xl">
    {"★".repeat(product.averageRating || 0)}
    {"☆".repeat(5 - (product.averageRating || 0))}
  </div>
  <span className="ml-1 text-sm text-gray-500">({product.totalReviews || 0})</span>
</div>
                    
                    <div className="product-price">
                      ₹{product.price?.toFixed(2) || "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
