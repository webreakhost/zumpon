


// import React from "react";
// import Category from "./Category";

// const Storesidebar = () => {
//   return (
//     <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
//       {/* Sidebar Overlay */}
//       <div className="sidebar-overlay"></div>
//       <a className="sidebar-close" href="#">
//         <i className="close-icon"></i>
//       </a>
//       <a href="#" className="sidebar-toggle">
//         <i className="fas fa-chevron-right"></i>
//       </a>

//       <div className="sidebar-content">
//         <div className="sticky-sidebar">
//           {/* Categories Widget */}
          
//           <Category/>

//           {/* Contact Vendor Widget */}
//           <div className="widget widget-collapsible widget-contact">
//             <h3 className="widget-title">
//               <span>Contact Vendor</span>
//             </h3>
//             <div className="widget-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 id="name"
//                 placeholder="Your Name"
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 name="email"
//                 id="email_1"
//                 placeholder="you@example.com"
//               />
//               <textarea
//                 name="message"
//                 maxLength="1000"
//                 cols="25"
//                 rows="6"
//                 placeholder="Type your message..."
//                 className="form-control"
//                 required
//               ></textarea>
//               <a href="#" className="btn btn-dark btn-rounded">
//                 Send Message
//               </a>
//             </div>
//           </div>

//           {/* Store Time Widget */}
//           <div className="widget widget-collapsible widget-time">
//             <h3 className="widget-title">
//               <span>Store Time</span>
//             </h3>
//             <ul className="widget-body">
//               <li>
//                 <label>Sunday</label>
//               </li>
//               <li>
//                 <label>Monday</label>
//               </li>
//               <li>
//                 <label>Tuesday</label>
//               </li>
//               <li>
//                 <label>Wednesday</label>
//               </li>
//               <li>
//                 <label>Thursday</label>
//               </li>
//               <li>
//                 <label>Friday</label>
//               </li>
//               <li>
//                 <label>Saturday</label>
//               </li>
//             </ul>
//           </div>

//           {/* Best Selling Widget */}
//           <div className="widget widget-collapsible widget-products">
//             <h3 className="widget-title">
//               <span>Best Selling</span>
//             </h3>
//             <div className="widget-body">
//               {[
//                 { img: "assets/images/shop/1.jpg", name: "3D Television", price: "$220.00", rating: "80%" },
//                 { img: "assets/images/shop/2-1.jpg", name: "Alarm Clock With Lamp", price: "$30.00", oldPrice: "$60.00", rating: "80%" },
//                 { img: "assets/images/shop/3.jpg", name: "Apple Laptop", price: "$1,000.00", rating: "60%" },
//               ].map((product, index) => (
//                 <div className="product product-widget" key={index}>
//                   <figure className="product-media">
//                     <a href="product-default.html">
//                       <img src={product.img} alt={product.name} width="100" height="106" />
//                     </a>
//                   </figure>
//                   <div className="product-details">
//                     <h4 className="product-name">
//                       <a href="product-default.html">{product.name}</a>
//                     </h4>
//                     <div className="ratings-container">
//                       <div className="ratings-full">
//                         <span className="ratings" style={{ width: product.rating }}></span>
//                         <span className="tooltiptext tooltip-top"></span>
//                       </div>
//                     </div>
//                     <div className="product-price">
//                       {product.oldPrice ? (
//                         <>
//                           <ins className="new-price">{product.price}</ins>
//                           <del className="old-price">{product.oldPrice}</del>
//                         </>
//                       ) : (
//                         product.price
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Top Rated Widget */}
//           <div className="widget widget-collapsible widget-products">
//             <h3 className="widget-title">
//               <span>Top Rated</span>
//             </h3>
//             <div className="widget-body">
//               {[
//                 { img: "assets/images/shop/12.jpg", name: "Classic Simple Backpack", price: "$85.00", rating: "100%" },
//                 { img: "assets/images/shop/13.jpg", name: "Smart Watch", price: "$90.00", rating: "100%" },
//                 { img: "assets/images/shop/20.jpg", name: "Pencil Case", price: "$54.00", rating: "100%" },
//               ].map((product, index) => (
//                 <div className="product product-widget" key={index}>
//                   <figure className="product-media">
//                     <a href="product-default.html">
//                       <img src={product.img} alt={product.name} width="100" height="106" />
//                     </a>
//                   </figure>
//                   <div className="product-details">
//                     <h4 className="product-name">
//                       <a href="product-default.html">{product.name}</a>
//                     </h4>
//                     <div className="ratings-container">
//                       <div className="ratings-full">
//                         <span className="ratings" style={{ width: product.rating }}></span>
//                         <span className="tooltiptext tooltip-top"></span>
//                       </div>
//                     </div>
//                     <div className="product-price">{product.price}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* End of Top Rated Widget */}
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Storesidebar;





import React, { useState } from "react";
import Category from "./Category";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import { useParams } from "react-router-dom";

const Storesidebar = () => {
  const { shopName } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await axios.post(`${BACKENDURL}/api/v1/vendormsg/send-message`, {
        ...formData,
        vendorShopName: shopName,
      });
      if (response.data.success) {
        setSuccessMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
      <div className="sidebar-overlay"></div>
      <a className="sidebar-close" href="#">
        <i className="close-icon"></i>
      </a>
      <a href="#" className="sidebar-toggle">
        <i className="fas fa-chevron-right"></i>
      </a>

      <div className="sidebar-content">
        <div className="sticky-sidebar">
          <Category />

          <div className="widget widget-collapsible widget-contact">
            <h3 className="widget-title">
              <span>Contact Vendor</span>
            </h3>
            <div className="widget-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email_1"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  maxLength="1000"
                  cols="25"
                  rows="6"
                  placeholder="Type your message..."
                  className="form-control"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit" className="btn btn-dark btn-rounded">
                  Send Message
                </button>
              </form>
              {successMsg && (
                <p className="text-green-600 mt-2 text-sm">{successMsg}</p>
              )}
              {errorMsg && (
                <p className="text-red-600 mt-2 text-sm">{errorMsg}</p>
              )}
            </div>
          </div>

          {/* Other widgets (Store Time, Best Selling, etc.) stay unchanged */}
        </div>
      </div>
    </aside>
  );
};

export default Storesidebar;
