import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const AdminVendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all vendors
  const fetchVendors = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BACKENDURL + "/api/v1/vendor/vendors"); // Update with your backend URL
      setVendors(response.data.vendors);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    } finally {
      setLoading(false);
    }
  };

  // Approve vendor
  const approveVendor = async (vendorId) => {
    try {
      await axios.put(`${BACKENDURL}/api/v1/vendor/approve/${vendorId}`);
      setVendors((prev) =>
        prev.map((vendor) =>
          vendor._id === vendorId ? { ...vendor, isApproved: true } : vendor
        )
      );
    } catch (error) {
      console.error("Error approving vendor:", error);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Vendor Management</h2>

      {loading ? (
        <p>Loading vendors...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vendors.length > 0 ? (
            vendors.map((vendor) => (
              <div key={vendor._id} className="bg-white p-4 shadow rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={`${BACKENDURL}${vendor.logo}`} // Adjust backend URL if needed
                    alt="Vendor Logo"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{vendor.shopName}</h3>
                    <p className="text-sm text-gray-600">{vendor.description}</p>
                    <p className="text-sm text-gray-600">
                      Contact: {vendor.phoneNumber}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={vendor.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit Shop
                  </a>
                  {vendor.isApproved ? (
                    <span className="text-green-600 font-semibold">Approved</span>
                  ) : (
                    <button
                      onClick={() => approveVendor(vendor._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                      Approve
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No vendors found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminVendorList;
