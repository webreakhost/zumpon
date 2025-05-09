





import React, { useEffect, useState } from "react";
import { BACKENDURL } from "../../config/config";
import { Link } from "react-router-dom";

const Storesli = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/vendor/stores`);
        const data = await response.json();
        if (response.ok) {
          setStores(data.stores);
        } else {
          console.error("Failed to fetch stores:", data.message);
        }
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <>
      {stores.length > 0 ? (
        stores.map((store) => (
          <div className="store store-list mt-4" key={store._id}>
            <div className="store-header">
              <a href={store.shopUrl}>
                <figure className="store-banner">
                  <img
                    src={`${BACKENDURL}${store.bgimage}`} 
                    alt={store.shopName}
                    width="400"
                    height="188"
                    style={{ backgroundColor: "#5D5D5D" }}
                  />
                </figure>
              </a>
            </div>
            <div className="store-content">
              <figure className="seller-brand">
                <img
                  src={`${BACKENDURL}${store.logo}`} 
                  alt="Brand"
                  width="80"
                  height="80"
                />
              </figure>
              <div className="seller-date">
                <h4 className="store-title">
                  <a href={store.shopUrl}>{store.shopName}</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div className="store-address">{store.description}</div>
                <Link
                  to={`/vendor/${store.shopName}`} 
                  className="btn btn-dark btn-link btn-underline btn-icon-right btn-visit"
                >
                  Visit Store <i className="w-icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No stores available</p>
      )}
    </>
  );
};

export default Storesli;
