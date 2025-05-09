




// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import Checkoutenav from "./Checkoutenav";

// const Checkoute = () => {
//     const user = useSelector((state) => state.user.user);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const cart = location.state?.cart;

//     const [billingDetails, setBillingDetails] = useState({
//         firstName: "",
//         lastName: "",
//         country: "United States",
//         streetAddress1: "",
//         streetAddress2: "",
//         city: "",
//         state: "California",
//         zip: "",
//         phone: "",
//         email: "",
//     });

//     if (!cart || cart.items.length === 0) {
//         return (
//             <div className="container text-center mt-5">
//                 <h2>No items in the cart</h2>
//                 <button className="btn btn-primary" onClick={() => navigate("/")}>
//                     Go to Shop
//                 </button>
//             </div>
//         );
//     }

//     const handleInputChange = (e) => {
//         setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
//     };

//     const handlePlaceOrder = async (e) => {
//         e.preventDefault();

//         if (!user?._id) {
//             alert("User not logged in!");
//             return;
//         }

//         try {
//             const orderData = {
//                 userId: user._id,
//                 products: cart.items.map((item) => ({
//                     productId: item.product._id,
//                     vendorId: item.product.vendor,
//                     name: item.product.name,
//                     quantity: item.quantity,
//                     price: item.product.price,
//                     size: item.size || null,  // ✅ Receive selected size
//                     color: item.color || null, // ✅ Optional: if you handle color
//                 })),
//                 billingDetails,
//             };

//             const response = await axios.post(
//                 `${BACKENDURL}/api/v1/checkoutss/checkout`,
//                 orderData,
//                 { withCredentials: true }
//             );

//             if (response.data.success) {
//                 navigate("/order-success");
//             } else {
//                 alert("Order failed. Try again.");
//             }
//         } catch (error) {
//             console.error("Order error:", error);
//             alert("Order failed.");
//         }
//     };

//     return (
//         <>
//             <Checkoutenav />
//             <div className="container mt-5">
//                 <h2>Checkout</h2>
//                 <form className="form checkout-form" onSubmit={handlePlaceOrder}>
//                     <div className="row mb-9">
//                         <div className="col-lg-7 pr-lg-4 mb-4">
//                             <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
//                                 Billing Details
//                             </h3>
//                             <div className="row gutter-sm">
//                                 <div className="col-xs-6">
//                                     <div className="form-group">
//                                         <label>First name *</label>
//                                         <input type="text" className="form-control form-control-md" name="firstName" value={billingDetails.firstName} onChange={handleInputChange} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-xs-6">
//                                     <div className="form-group">
//                                         <label>Last name *</label>
//                                         <input type="text" className="form-control form-control-md" name="lastName" value={billingDetails.lastName} onChange={handleInputChange} required />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label>Country / Region *</label>
//                                 <input type="text" className="form-control form-control-md" name="country" value={billingDetails.country} onChange={handleInputChange} required />
//                             </div>
//                             <div className="form-group">
//                                 <label>Street address *</label>
//                                 <input type="text" className="form-control form-control-md" name="streetAddress1" value={billingDetails.streetAddress1} onChange={handleInputChange} required />
//                                 <input type="text" className="form-control form-control-md" name="streetAddress2" value={billingDetails.streetAddress2} onChange={handleInputChange} />
//                             </div>
//                             <div className="row gutter-sm">
//                                 <div className="col-md-6">
//                                     <div className="form-group">
//                                         <label>City *</label>
//                                         <input type="text" className="form-control form-control-md" name="city" value={billingDetails.city} onChange={handleInputChange} required />
//                                     </div>
//                                     <div className="form-group">
//                                         <label>ZIP *</label>
//                                         <input type="text" className="form-control form-control-md" name="zip" value={billingDetails.zip} onChange={handleInputChange} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <div className="form-group">
//                                         <label>State *</label>
//                                         <input type="text" className="form-control form-control-md" name="state" value={billingDetails.state} onChange={handleInputChange} required />
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Phone *</label>
//                                         <input type="text" className="form-control form-control-md" name="phone" value={billingDetails.phone} onChange={handleInputChange} required />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="form-group mb-7">
//                                 <label>Email address *</label>
//                                 <input type="email" className="form-control form-control-md" name="email" value={billingDetails.email} onChange={handleInputChange} required />
//                             </div>
//                         </div>
//                         <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
//                             <div className="order-summary-wrapper sticky-sidebar">
//                                 <h3 className="title text-uppercase ls-10">Your Order</h3>
//                                 <div className="order-summary">
//                                     <table className="order-table">
//                                         <tbody>
//                                             {cart.items.map((item) => (
//                                                 <tr key={item.product._id}>
//                                                     <td>
//                                                         {item.product.name} x {item.quantity}
//                                                         {item.size && <div className="text-sm">Size: <strong>{item.size}</strong></div>}
//                                                         {item.color && (
//                                                             <div className="text-sm d-flex align-items-center">
//                                                                 Color:{" "}
//                                                                 <span
//                                                                     style={{
//                                                                         backgroundColor: item.color,
//                                                                         width: "15px",
//                                                                         height: "15px",
//                                                                         display: "inline-block",
//                                                                         marginLeft: "5px",
//                                                                         borderRadius: "50%",
//                                                                         border: "1px solid #000",
//                                                                     }}
//                                                                 ></span>
//                                                             </div>
//                                                         )}
//                                                     </td>
//                                                     <td>${(item.quantity * item.product.price).toFixed(2)}</td>
//                                                 </tr>
//                                             ))}
//                                             <tr>
//                                                 <th>Total</th>
//                                                 <td>${cart.totalPrice.toFixed(2)}</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <button type="submit" className="btn btn-dark btn-block btn-rounded">Place Order(cash on delevery)</button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default Checkoute;



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import Checkoutenav from "./Checkoutenav";

const Checkoute = () => {
    const user = useSelector((state) => state.user.user);
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state?.cart;

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        country: "United States",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        state: "California",
        zip: "",
        phone: "",
        email: "",
    });

    if (!cart || cart.items.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>No items in the cart</h2>
                <button className="btn btn-primary" onClick={() => navigate("/")}>Go to Shop</button>
            </div>
        );
    }

    const handleInputChange = (e) => {
        setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
    };

   
     

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
    
        if (!user?._id) {
            alert("User not logged in!");
            return;
        }
    
        const orderData = {
            userId: user._id,
            products: cart.items.map((item) => ({
                productId: item.product._id,
                vendorId: item.product.vendor,
                name: item.product.name,
                quantity: item.quantity,
                price: item.product.price,
                size: item.size || null,
                color: item.color || null,
            })),
            billingDetails,
        };
    
        try {
            if (paymentMethod === "cod") {
                const response = await axios.post(
                    `${BACKENDURL}/api/v1/checkoutss/checkout`,
                    orderData,
                    { withCredentials: true }
                );
                if (response.data.success) {
                    navigate("/order-success");
                } else {
                    alert("Order failed. Try again.");
                }
            } else if (paymentMethod === "online") {
                const response = await axios.post(
                    `${BACKENDURL}/api/v1/checkoutss/checkoutonline`,
                    orderData,
                    { withCredentials: true }
                );
    
                const { order, razorpayKey } = response.data;
    
                const options = {
                    key: razorpayKey,
                    amount: order.amount,
                    // vendorId: item.product.vendor,
                    currency: "INR",
                    name: "My Shop",
                    description: "Order Payment",
                    order_id: order.id,
                    handler: async (response) => {
                        // In a real app, you should verify the payment signature here
                        navigate("/order-success");
                    },
                    prefill: {
                        name: `${billingDetails.firstName} ${billingDetails.lastName}`,
                        email: billingDetails.email,
                        contact: billingDetails.phone,
                    },
                    theme: {
                        color: "#000000",
                    },
                };
    
                const rzp = new window.Razorpay(options);
                rzp.open();
            }
        } catch (error) {
            console.error("Payment error:", error);
            alert("Payment failed.");
        }
    };
    
    return (
        <>
            <Checkoutenav />
            <div className="container mt-5">
                <h2>Checkout</h2>
                <form className="form checkout-form" onSubmit={handlePlaceOrder}>
                    <div className="row mb-9">
                        <div className="col-lg-7 pr-lg-4 mb-4">
                            <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">Billing Details</h3>
                            <div className="row gutter-sm">
                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <label>First name *</label>
                                        <input type="text" className="form-control form-control-md" name="firstName" value={billingDetails.firstName} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <label>Last name *</label>
                                        <input type="text" className="form-control form-control-md" name="lastName" value={billingDetails.lastName} onChange={handleInputChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Country / Region *</label>
                                <input type="text" className="form-control form-control-md" name="country" value={billingDetails.country} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Street address *</label>
                                <input type="text" className="form-control form-control-md" name="streetAddress1" value={billingDetails.streetAddress1} onChange={handleInputChange} required />
                                <input type="text" className="form-control form-control-md" name="streetAddress2" value={billingDetails.streetAddress2} onChange={handleInputChange} />
                            </div>
                            <div className="row gutter-sm">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>City *</label>
                                        <input type="text" className="form-control form-control-md" name="city" value={billingDetails.city} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>ZIP *</label>
                                        <input type="text" className="form-control form-control-md" name="zip" value={billingDetails.zip} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>State *</label>
                                        <input type="text" className="form-control form-control-md" name="state" value={billingDetails.state} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone *</label>
                                        <input type="text" className="form-control form-control-md" name="phone" value={billingDetails.phone} onChange={handleInputChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label>Email address *</label>
                                <input type="email" className="form-control form-control-md" name="email" value={billingDetails.email} onChange={handleInputChange} required />
                            </div>

                            
                        </div>

                        {/* <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                            <div className="order-summary-wrapper sticky-sidebar">
                                <h3 className="title text-uppercase ls-10">Your Order</h3>
                                <div className="order-summary">
                                    <table className="order-table">
                                        <tbody>
                                            {cart.items.map((item) => (
                                                <tr key={item.product._id}>
                                                    <td>
                                                        {item.product.name} x {item.quantity}
                                                        {item.size && <div className="text-sm">Size: <strong>{item.size}</strong></div>}
                                                        {item.color && (
                                                            <div className="text-sm d-flex align-items-center">
                                                                Color:{" "}
                                                                <span
                                                                    style={{
                                                                        backgroundColor: item.color,
                                                                        width: "15px",
                                                                        height: "15px",
                                                                        display: "inline-block",
                                                                        marginLeft: "5px",
                                                                        borderRadius: "50%",
                                                                        border: "1px solid #000",
                                                                    }}
                                                                ></span>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>${(item.quantity * item.product.price).toFixed(2)}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <th>Total</th>
                                                <td>${cart.totalPrice.toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="form-group mb-5">
                                <label><strong>Payment Method</strong></label><br />
                                <div className="form-check">
                                    <input type="radio" name="paymentMethod" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} />
                                    <label className="form-check-label ml-2">Cash on Delivery</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" name="paymentMethod" value="online" checked={paymentMethod === "online"} onChange={(e) => setPaymentMethod(e.target.value)} />
                                    <label className="form-check-label ml-2">Online Payment (Razorpay)</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-dark btn-block btn-rounded">
                                {paymentMethod === "cod" ? "Place Order (COD)" : "Pay & Place Order"}
                            </button>




                        </div> */}

<div className="lg:w-2/5 w-full mb-6 lg:mb-0 lg:sticky top-6">
  <div className="bg-white rounded-2xl shadow-xl p-6">
    <h3 className="text-2xl font-bold uppercase tracking-wide text-gray-800 mb-4">Your Order</h3>

    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-700">
        <tbody>
          {cart.items.map((item) => (
            <tr key={item.product._id} className="border-b last:border-b-0">
              <td className="py-4 pr-4 align-top">
                <div className="font-semibold text-2xl ">{item.product.name} x {item.quantity}</div>
                {item.size && (
                  <div className="text-sm text-gray-500 mt-1">
                    Size: <strong>{item.size}</strong>
                  </div>
                )}
                {item.color && (
                  <div className="text-sm text-gray-500 mt-1 flex items-center">
                    Color:
                    <span
                      className="ml-2 rounded-full border border-black"
                      style={{
                        backgroundColor: item.color,
                        width: "16px",
                        height: "16px",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                )}

              </td>
              <div className="flex items-center justify-center mt-1">
                <img
                                                  src={
                                                    item.product.image
                                                      ? `${BACKENDURL}/uploads/product/${item.product.image.split("\\").pop()}`
                                                      : "/assets/images/shop/default.jpg"
                                                  }
                                                  alt={item.product.name}
                                                  width="60"
                                                  height="60"
                                                  className="img3 " 
                                                />
              </div>
              <td className="py-4 text-right text-2xl font-medium text-gray-800">
                {(item.quantity * item.product.price).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr className="border-t">
            <th className="pt-4 pb-2 text-3xl text-gray-800">Total</th>
            <td className="pt-4 pb-2 text-3xl font-bold text-right text-black">
              {cart.totalPrice.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="bg-white mt-6 rounded-2xl shadow-xl p-6">
    <label className="block text-lg font-semibold text-gray-700 mb-3">Payment Method</label>
    
    <div className="space-y-3">
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="paymentMethod"
          value="cod"
          checked={paymentMethod === "cod"}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="form-radio text-indigo-600"
        />
        <span className="text-gray-700">Cash on Delivery</span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="paymentMethod"
          value="online"
          checked={paymentMethod === "online"}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="form-radio text-indigo-600"
        />
        <span className="text-gray-700">Online Payment (Razorpay)</span>
      </label>
    </div>
  </div>

  <button
    type="submit"
    className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
  >
    {paymentMethod === "cod" ? "Place Order (COD)" : "Pay & Place Order"}
  </button>
</div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkoute;
