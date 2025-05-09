






import React, { useState, useEffect } from "react";
import { BACKENDURL } from "../../config/config";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);

  const setRandomProduct = (productsList) => {
    const randomIndex = Math.floor(Math.random() * productsList.length);
    const selected = productsList[randomIndex];
    setProduct(selected);
    if (selected.images?.[0]?.urls?.[0]) {
      setSelectedImage(selected.images[0].urls[0]);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/product/allproduct`);
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          setProducts(data.data);
          setRandomProduct(data.data);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (products.length > 0) {
        setRandomProduct(products);
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [products]);

  const handleAddToCart = () => {
    console.log("Add to Cart clicked for", product?._id);
    // Add actual add-to-cart logic here
  };

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center text-lg font-semibold">Product not found</p>;
  }

  return (
    <div className="single-product p-8 bg-white rounded-xl shadow-lg max-w-12xl mx-auto h-auto md:h-auto">
      <h4 className="text-2xl font-bold text-center mb-6 text-gray-800 border-b pb-2">
        Deals Hot of The Day
      </h4>

      <div className="container1">
        <div className="row gutter-lg1">
          <div className="main-content1">
            <div className="product product-single row">
              <div className="col-md-6 mb-6">
                <div className="product-gallery product-gallery-sticky">
                  <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                    <div className="swiper-wrapper row cols-1 gutter-no">
                      {selectedImage ? (
                        <div className="swiper-slide">
                          <figure className="product-image img2">
                            <img
                              src={`${BACKENDURL}/uploads/product/${selectedImage.split("\\").pop()}`}
                              alt={product.name}
                              width="300"
                              height="400"
                            />
                          </figure>
                        </div>
                      ) : (
                        <p>No images available</p>
                      )}
                    </div>
                  </div>

                  <div className="product-thumbs-wrap swiper-container">
                    <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                      {product.images && product.images.length > 0 ? (
                        product.images.map((imageObj, index) =>
                          imageObj.urls.map((url, i) => (
                            <div
                              className="product-thumb swiper-slide"
                              key={`${index}-${i}`}
                              onClick={() => setSelectedImage(url)}
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={`${BACKENDURL}/uploads/product/${url.split("\\").pop()}`}
                                alt={`Product Thumbnail ${index + 1}`}
                                width="100"
                                height="100"
                              />
                            </div>
                          ))
                        )
                      ) : (
                        <p>No thumbnail images</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4 mb-md-6">
                <div className="product-details">
                  <h1 className="product-title">{product.name || "No Name"}</h1>
                  

                  <div className="product-price">
                    <ins className="new-price">${product.price || "0.00"}</ins>
                  </div>

                  <div className="text-2xl">
                    <h3 className="">description:{product.description || "N/A"}</h3>
                  </div>

                  <div className="product-short-desc">
                    <ul className="list-type-check list-style-none">
                      {product.features && product.features.length > 0 ? (
                        product.features.map((feature, index) => <li key={index}>{feature}</li>)
                      ) : (
                        <li>No features listed</li>
                      )}
                    </ul>
                  </div>

                  <hr className="product-divider" />

                  <div className="product-form product-variation-form product-color-swatch">
                    <label>Color:</label>
                    <div className="d-flex align-items-center product-variations">
                      {product.colors && product.colors.length > 0 ? (
                        product.colors.map((colorObj, index) => (
                          <a
                            href="#"
                            key={index}
                            className={`color ${
                              selectedColor === colorObj.color ? "selected" : ""
                            }`}
                            style={{
                              backgroundColor: colorObj.color,
                              width: "30px",
                              height: "30px",
                              display: "inline-block",
                              border: "1px solid #000",
                              margin: "5px",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedColor(colorObj.color);
                            }}
                          ></a>
                        ))
                      ) : (
                        <p>No colors available</p>
                      )}
                    </div>
                  </div>

                  <div className="product-form product-variation-form product-size-swatch">
                    <label className="mb-1">Size:</label>
                    <div className="flex-wrap d-flex align-items-center product-variations">
                      {product.sizes && product.sizes.length > 0 ? (
                        product.sizes.map((sizeObj) => (
                          <a
                            href="#"
                            key={sizeObj._id}
                            className={`size ${
                              selectedSize === sizeObj.size ? "selected" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedSize(sizeObj.size);
                            }}
                          >
                            {sizeObj.size}
                          </a>
                        ))
                      ) : (
                        <p>No sizes available</p>
                      )}
                    </div>
                  </div>

                  <div className="product-form container">
                    {/* <div className="product-qty-form">
                      <div className="input-group">
                        <input
                          className="quantity form-control"
                          type="number"
                          min="1"
                          max="10000000"
                          defaultValue="1"
                        />
                        <button className="quantity-plus w-icon-plus"></button>
                        <button className="quantity-minus w-icon-minus"></button>
                      </div>
                    </div> */}
                    <button className="btn btn-primary btn-cart" onClick={handleAddToCart}>
                      <i className="w-icon-cart"></i>
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  <div className="social-links-wrapper">
                    <div className="social-links">
                      <div className="social-icons social-no-color border-thin">
                        <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                        <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                        <a href="#" className="social-icon social-pinterest fab fa-pinterest-p"></a>
                        <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
                        <a href="#" className="social-icon social-youtube fab fa-linkedin-in"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default SingleProduct;
