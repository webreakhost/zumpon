


import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import Cartnav from "./Cartnav";
import { useNavigate } from "react-router-dom";
import DynamicHead from "../DynamicHead";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const{name} = useParams();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(BACKENDURL + "/api/v1/cart/getcart", {
        withCredentials: true,
      });
      setCart(response.data.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete(`${BACKENDURL}/api/v1/cart/remove/${productId}`, {
        withCredentials: true,
      });
      fetchCart(); // Refresh cart after removing item
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleCheckout = () => {
    if (cart?.items?.length > 0) {
      navigate("/checkout", { state: { cart } });
    } else {
      alert("Your cart is empty. Add items before checkout.");
    }
  };

  if (loading) return <p>Loading cart...</p>;

  return (
    <>
      <DynamicHead
        title="Your Shopping Cart - Zumpon"
        description="View the items in your shopping cart and proceed to checkout. Secure, fast, and reliable shopping at Zumpon."
        keywords="Zumpon Cart, Shopping Cart, Checkout, Cart Items, Zumpon"
        image="https://zumpon.com/images/cart-banner.png"
        url="https://zumpon.com/cart"
        author="Zumpon Team"
      />
      <Cartnav />
      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg mb-10">
            <div className="col-lg-8 pr-lg-4 mb-6">
              <table className="shop-table cart-table">
                <thead>
                  <tr>
                    <th className="product-name"><span>Product</span></th>
                    <th></th>
                    <th className="product-price"><span>Price</span></th>
                    <th className="product-quantity"><span>Quantity</span></th>
                    <th className="product-subtotal"><span>Subtotal</span></th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.items?.length > 0 ? (
                    cart.items.map((item) => (
                      <tr key={item.product._id}>
                        <td className="product-thumbnail ">
                          <div className="p-relative">
                            {/* className="sm:w-[200px] w-[100px]" */}
                            <a href={`/${item.product.name}`}>
                              <figure>
                                <img
                                  src={
                                    item.product.image
                                      ? `${BACKENDURL}/uploads/product/${item.product.image.split("\\").pop()}`
                                      : "/assets/images/shop/default.jpg"
                                  }
                                  alt={item.product.name}
                                  width="200"
                                  height="200"
                                  className="img1" 
                                />
                              </figure>
                            </a>
                            <button
                              type="button"
                              className="btn btn-close"
                              onClick={() => handleRemoveFromCart(item.product._id)}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </td>


                        <td className="product-name">
                          <a href={`/${item.product.name}`}>{item.product.name}</a>
                          {item.size && <p className="mt-1 text-sm">Size: <strong>{item.size}</strong></p>}
                          {item.color && <p className="mt-1 text-sm">Color: <strong>{item.color}</strong></p>}
                          
                        </td>
                        <td className="product-price">
                          <span className="amount">${item.price.toFixed(2)}</span>
                        </td>
                        <td className="product-quantity">
                          <div className="input-group">
                            <input
                              className="quantity form-control"
                              type="number"
                              min="1"
                              max="100000"
                              value={item.quantity}
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">${(item.price * item.quantity).toFixed(2)}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        <p>Your cart is empty</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <form className="coupon">
                <h5 className="title coupon-title font-weight-bold text-uppercase">Coupon Discount</h5>
                <input type="text" className="form-control mb-4" placeholder="Enter coupon code here..." required />
                <button className="btn btn-dark btn-outline btn-rounded">Apply Coupon</button>
              </form>
            </div>

            <div className="col-lg-4 sticky-sidebar-wrapper">
              <div className="sticky-sidebar">
                <div className="cart-summary mb-4">
                  <h3 className="cart-title text-uppercase">Cart Totals</h3>
                  <div className="cart-subtotal d-flex align-items-center justify-content-between">
                    <label className="ls-25">Subtotal</label>
                    <span>${cart?.totalPrice?.toFixed(2) || "0.00"}</span>
                  </div>

                  <hr className="divider" />

                  <ul className="shipping-methods mb-2">
                    <li>
                      <label className="shipping-title text-dark font-weight-bold">Shipping</label>
                    </li>
                    <li>
                      <div className="custom-radio">
                        <input type="radio" id="free-shipping" className="custom-control-input" name="shipping" />
                        <label htmlFor="free-shipping" className="custom-control-label color-dark">
                          Free Shipping
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-radio">
                        <input type="radio" id="local-pickup" className="custom-control-input" name="shipping" />
                        <label htmlFor="local-pickup" className="custom-control-label color-dark">
                          Local Pickup
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-radio">
                        <input type="radio" id="flat-rate" className="custom-control-input" name="shipping" />
                        <label htmlFor="flat-rate" className="custom-control-label color-dark">
                          Flat rate: $5.00
                        </label>
                      </div>
                    </li>
                  </ul>

                  <hr className="divider mb-6" />
                  <div className="order-total d-flex justify-content-between align-items-center">
                    <label>Total</label>
                    <span className="ls-50">${cart?.totalPrice?.toFixed(2) || "0.00"}</span>
                  </div>


                  <button onClick={handleCheckout} className="btn btn-dark btn-block">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;



