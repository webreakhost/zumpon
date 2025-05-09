

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BACKENDURL } from "../../config/config";
// import addToCart from "../../helpers/addToCart";
import addToCart from "../../helpers/addTocart";
import Productdetnav from "./Productdetnav";
import SimilarProducts from "./SimilarProducts";
import Sidebar from "./Sidebar";
import Frewuenty from "./Frewuenty";

const SingleProduct = () => {
  const { id } = useParams();
  const { name } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  

  useEffect(() => {
    const fetchProduct = async () => {
      
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/product/productdet/${name}`);
        const data = await response.json();
        if (data.success) {
          setProduct(data.data);
          if (data.data.images && data.data.images.length > 0) {
            setSelectedImage(data.data.images[0].urls[0]);
          }
        } else {
          console.error("Error fetching product:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [name]);

  const handleAddToCart = (e) => {
    if (!selectedSize) {
      toast.error("Please select a size!");
      return;
    }

    addToCart(e, product.name, selectedSize, selectedColor);
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Productdetnav />
      <div class="page-content">
        <div class="container">
          <div class="row gutter-lg">

            <div class="main-content">
              <div className="product product-single row">
                <div className="col-md-6 mb-6">
                  <div className="product-gallery product-gallery-sticky">
                    <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                      <div className="swiper-wrapper row cols-1 gutter-no">
                        {selectedImage ? (
                          <div className="swiper-slide ">
                            <figure className="product-image img2">
                              <img
                                src={`${BACKENDURL}/uploads/product/${selectedImage.split("\\").pop()}`}
                                alt={product.name}
                                width="400"
                                height="500"
                              />
                            </figure>
                            

                          </div>
                        ) : (
                          <p>No images available</p>
                        )}
                      </div>


                    </div>

                    <div className="product-thumbs-wrap swiper-container ">
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
                    {product.vendor && (
                      <div className="vendor-details">
                        <p><strong>Sold by:</strong> {product.vendor.shopName || "Unknown Shop"}</p>
                       
                       
                      </div>
                    )}
                    <div className="product-meta">
                      <div className="product-categories">
                        Category: <span className="product-category"><a href="#">{product.category || "Unknown"}</a></span>
                      </div>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">₹{product.price || "0.00"}</ins>
                    </div>
                    <div className="text-2xl">
                      <h3 className="">description:{product.description || "0.00"}</h3>
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
                              className={`color ${selectedColor === colorObj.color ? "selected" : ""}`}
                              style={{
                                backgroundColor: colorObj.color,
                                width: "30px",
                                height: "30px",
                                display: "inline-block",
                                border: "1px solid #000",
                                margin: "5px"
                              }}
                              // onClick={(e) => {
                              //   e.preventDefault();
                              //   setSelectedColor(colorObj.color);
                              // }}

                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedColor(colorObj.color);
                              
                                // Filter images based on selected color
                                const colorImages = product.colors.find(
                                  (clr) => clr.color === colorObj.color
                                )?.images;
                              
                                if (colorImages && colorImages.length > 0) {
                                  setSelectedImage(colorImages[0]); // Set first image of selected color
                                } else if (product.images && product.images.length > 0) {
                                  // fallback to default image if no color image found
                                  setSelectedImage(product.images[0].urls[0]);
                                }
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
                              className={`size ${selectedSize === sizeObj.size ? "selected" : ""}`}
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
                      <div className="product-qty-form">
                        <div className="input-group">
                          <input className="quantity form-control" type="number" min="1" max="10000000" />
                          <button className="quantity-plus w-icon-plus"></button>
                          <button className="quantity-minus w-icon-minus"></button>
                        </div>
                      </div>
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
              <Frewuenty/>
              
            </div>
            <Sidebar/>
          </div>
          <SimilarProducts name={name} />
        </div>
        {/* <SimilarProducts/> */}

      </div>

    </>

  );
};

export default SingleProduct;






