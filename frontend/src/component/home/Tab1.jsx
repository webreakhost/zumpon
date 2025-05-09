

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKENDURL } from "../../config/config";
import addToWishlist from "../../helpers/addToWishlist";

const Tab1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRatings, setUserRatings] = useState({});
  const [productReviews, setProductReviews] = useState({});

  const getRandomProducts = (productArray, count) => {
    const shuffled = [...productArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const fetchProductReviews = async (productId) => {
    try {
      const res = await fetch(`${BACKENDURL}/api/v1/product/productrv/${productId}/reviews`);
      const data = await res.json();
      if (data.success) {
        setProductReviews((prev) => ({
          ...prev,
          [productId]: data,
        }));
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/product/allproduct`);
        const data = await response.json();
        if (data.success) {
          const random15 = getRandomProducts(data.data, 15);
          setProducts(random15);
          random15.forEach((product) => fetchProductReviews(product._id));
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleStarClick = (productId, star) => {
    setUserRatings((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], stars: star },
    }));
  };

  const handleReviewSubmit = async (productId) => {
    const ratingData = userRatings[productId];
    if (!ratingData || !ratingData.stars || ratingData.stars < 1 || ratingData.stars > 5) {
      return alert("Please select a rating between 1 and 5 stars.");
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BACKENDURL}/api/v1/product/productrv/${productId}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          stars: Number(ratingData.stars),
          comment: ratingData.comment || "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Review submitted!");
        fetchProductReviews(productId);
      } else {
        alert(data.message || "Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Something went wrong while submitting the review.");
    }
  };

  return (
    <div className="tab-pane active pt-4">
      {loading ? (
        <p className="text-center text-lg font-semibold">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => {
            const reviewData = productReviews[product._id];
            const average = reviewData?.averageRating || 0;
            const reviews = reviewData?.reviews || [];

            return (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-4 transition-all hover:shadow-lg"
              >
                <div className="relative group">
                  <Link to={`/${product.name}`} className="block">
                    {product.images.length > 0 && (
                      <img
                        src={`${BACKENDURL}/uploads/product/${product.images?.[0]?.urls?.[0].split("\\").pop()}`}
                        alt="Product"
                        className="w-full h-[180px] sm:h-[260px] object-cover rounded-lg"
                      />
                    )}
                  </Link>

                  <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button
                      className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                      title="Add to cart"
                    >
                      🛒
                    </button>
                    <button
                      className="btn-product-icon btn-wishlist w-icon-heart rounded-full"
                      title="Add to wishlist"
                      onClick={(e) => addToWishlist(e, product._id)}
                    ></button>
                  </div>

                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  )}
                </div>

                <div className="product-details text-center mt-0  space-y-3">
                  <h4 className="product-name">
                    <Link to={`/product/${product.name}`}>{product.name}</Link>
                  </h4>

                  {/* Average Rating */}
                  <div className="flex justify-center items-center mt-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-2xl ${average >= star ? "text-yellow-400" : "text-gray-300"
                          }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({reviewData?.totalReviews || 0} reviews)</span>
                  </div>

                  {/* User Rating */}
                  <div className="flex justify-center gap-1">
                  {/* <div className="flex justify-center gap-0 mt-0">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          onClick={() => handleStarClick(product._id, star)}
                          className={`cursor-pointer text-2xl ${userRatings[product._id]?.stars >= star
                              ? "text-yellow-500"
                              : "text-gray-300"
                            }`}
                        >
                          ★
                        </span>
                      ))}
                    </div> */}
                    {/* <div>
                      <button
                        onClick={() => handleReviewSubmit(product._id)}
                        className="mt-1 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Submit
                      </button>


                    </div> */}

                  </div>





                  <div className="product-price mt-0">
                    <ins className="new-price">{product.price}</ins>
                    {product.oldPrice && (
                      <del className="old-price">{product.oldPrice}</del>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Tab1;
