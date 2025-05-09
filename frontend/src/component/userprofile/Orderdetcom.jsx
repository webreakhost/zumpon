



// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const Orderdetcom = () => {
//   const [orders, setOrders] = useState([]);


//   // Get user details from Redux store
//   const user = useSelector((state) => state.user.user);
//   console.log("Redux user:", user); // Debugging user state
//   const userId = user?._id;
//   console.log("Extracted userId:", userId); // Debugging userId

//   useEffect(() => {
    

//     const fetchOrders = async () => {
//       try {
//         console.log(`Fetching orders for user ID: ${userId}`);
//         const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`);
//         console.log("Orders fetched:", response.data);
//         setOrders(response.data.orders);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.response?.data?.message || "Failed to fetch orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userId]);

// //   if (loading) return <p>Loading orders...</p>;
// //   if (error) return <p className="error">{error}</p>;
//   if (!orders.length) return <p>No orders found.</p>;

//   return (
//     // <div className="tab-pane active order px-20 ">
//     <div className="tab-pane active order px-2 sm:px-6 md:px-5 lg:px-0 xl:px-0 max-w-screen-lg mx-auto">

//       {orders.map((order) => (
//         <div key={order._id}>
//           <p className="mb-7">
//             Order #{order._id} was placed on {new Date(order.createdAt).toDateString()} and is currently {order.status}.
//           </p>

//           <div className="order-details-wrapper mb-5">
//             <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
//             <table className="order-table">
//               <thead>
//                 <tr>
//                   <th className="text-dark">Product</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {order.products.map((item) => (
//                   <tr key={item.productId}>
//                     <td>
//                       <a href="#">{item.name}</a>&nbsp;<strong>x {item.quantity}</strong>
//                       <br />
//                       <p>size:{item.size}</p>
//                       {/* <br /> */}
//                       Vendor: <a href="#">{item.vendorId}</a>
//                       <br />
                      
//                     </td>

//                     <div className="flex items-center justify-center mt-1">
//                                     <img
//                                                                       src={
//                                                                         item.product.image
//                                                                           ? `${BACKENDURL}/uploads/product/${item.product.image.split("\\").pop()}`
//                                                                           : "/assets/images/shop/default.jpg"
//                                                                       }
//                                                                       alt={item.product.name}
//                                                                       width="60"
//                                                                       height="60"
//                                                                       className="img3 " 
//                                                                     />
//                                   </div>
//                     <td>${item.price.toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <th>Subtotal:</th>
//                   <td>${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                   <th>Shipping:</th>
//                   <td>Flat rate</td>
//                 </tr>
//                 <tr>
//                   <th>Status:</th>
//                   <td>{order.status}</td>
//                 </tr>
//                 <tr className="total">
//                   <th className="border-no">Total:</th>
//                   <td className="border-no">${order.totalAmount.toFixed(2)}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           {order.billingDetails && (
//             <div className="billing-address">
//               <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
//               <address>
//                 <p>{order.billingDetails.firstName} {order.billingDetails.lastName}</p>
//                 <p>{order.billingDetails.streetAddress1}, {order.billingDetails.streetAddress2 || ""}</p>
//                 <p>{order.billingDetails.city}, {order.billingDetails.state}, {order.billingDetails.country}</p>
//                 <p>{order.billingDetails.zip}</p>
//                 <p>{order.billingDetails.phone}</p>
//               </address>
//             </div>
//           )}

//           <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6">
//             <i className="w-icon-long-arrow-left"></i>Back To List
//           </a>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Orderdetcom;



import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const Orderdetcom = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);     // Added error state

  const user = useSelector((state) => state.user.user);
  const userId = user?._id;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/checkoutss/orders/${userId}`);
        setOrders(response.data.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError(err.response?.data?.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!orders.length) return <p>No orders found.</p>;

  return (
    <div className="tab-pane active order px-2 sm:px-6 md:px-5 lg:px-0 xl:px-0 max-w-screen-lg mx-auto">
      {orders.map((order) => (
        <div key={order._id}>
          <p className="mb-7">
            Order #{order._id} was placed on {new Date(order.createdAt).toDateString()} and is currently {order.status}.
          </p>

          <div className="order-details-wrapper mb-5">
            <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
            <table className="order-table">
              <thead>
                <tr>
                  <th className="text-dark">Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((item, idx) => {
                  const imageUrl =
                    item.product?.image
                      ? `${BACKENDURL}/uploads/product/${item.product.image.split("\\").pop()}`
                      : "/assets/images/shop/default.jpg";

                  return (
                    <tr key={idx}>
                      <td>
                        <a href="#">{item.name}</a>&nbsp;<strong>x {item.quantity}</strong>
                        <br />
                        <p>Size: {item.size}</p>
                        <p>color: {item.color || "N/A"}</p>

                        Vendor: <a href="#">{item.vendorId}</a>
                        {/* <div className="flex items-center justify-center mt-1">
                          <img
                            src={imageUrl}
                            alt={item.product?.name || "Product"}
                            width="60"
                            height="60"
                            className="img3"
                          />
                        </div> */}
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th>Subtotal:</th>
                  <td>${order.totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Shipping:</th>
                  <td>Flat rate</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{order.status}</td>
                </tr>
                <tr className="total">
                  <th className="border-no">Total:</th>
                  <td className="border-no">${order.totalAmount.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {order.billingDetails && (
            <div className="billing-address">
              <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
              <address>
                <p>{order.billingDetails.firstName} {order.billingDetails.lastName}</p>
                <p>{order.billingDetails.streetAddress1}, {order.billingDetails.streetAddress2 || ""}</p>
                <p>{order.billingDetails.city}, {order.billingDetails.state}, {order.billingDetails.country}</p>
                <p>{order.billingDetails.zip}</p>
                <p>{order.billingDetails.phone}</p>
              </address>
            </div>
          )}

          <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6">
            <i className="w-icon-long-arrow-left"></i>Back To List
          </a>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Orderdetcom;




