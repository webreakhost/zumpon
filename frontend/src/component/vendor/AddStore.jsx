


import { useState } from "react";
import { BACKENDURL } from "../../config/config";

const AddStore = () => {
  const [storeData, setStoreData] = useState({
    userId: "", // Replace with actual userId from authentication
    shopName: "",
    description: "",
    shopUrl: "",
    phoneNumber: "",
    logo: null,
    bgimage: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [bgImagePreview, setBgImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStoreData({ ...storeData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    
    if (file) {
      setStoreData({ ...storeData, [name]: file });

      // Set preview
      const previewUrl = URL.createObjectURL(file);
      if (name === "logo") setLogoPreview(previewUrl);
      if (name === "bgimage") setBgImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("userId", storeData.userId);
    formData.append("shopName", storeData.shopName);
    formData.append("description", storeData.description);
    formData.append("shopUrl", storeData.shopUrl);
    formData.append("phoneNumber", storeData.phoneNumber);
    if (storeData.logo) formData.append("logo", storeData.logo);
    if (storeData.bgimage) formData.append("bgimage", storeData.bgimage);

    try {
      const response = await fetch(BACKENDURL + "/api/v1/vendor/add-store", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Store added successfully!");
        setStoreData({
          userId: "",
          shopName: "",
          description: "",
          shopUrl: "",
          phoneNumber: "",
          logo: null,
          bgimage: null,
        });
        setLogoPreview(null);
        setBgImagePreview(null);
      } else {
        setMessage(result.message || "Failed to add store");
      }
    } catch (error) {
      console.error("Error adding store:", error);
      setMessage("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Add Store</h2>

      {message && <p className="text-center text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={storeData.userId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="shopName"
          placeholder="Shop Name"
          value={storeData.shopName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={storeData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="shopUrl"
          placeholder="Shop URL"
          value={storeData.shopUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={storeData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Logo Upload */}
        <div className="border p-4 rounded">
          <label className="block mb-2 font-semibold">Upload Logo</label>
          <input type="file" name="logo" accept="image/*" onChange={handleFileChange} />
          {logoPreview && <img src={logoPreview} alt="Logo Preview" className="mt-2 w-24 h-24 rounded-md" />}
        </div>

        {/* Background Image Upload */}
        <div className="border p-4 rounded">
          <label className="block mb-2 font-semibold">Upload Background Image</label>
          <input type="file" name="bgimage" accept="image/*" onChange={handleFileChange} />
          {bgImagePreview && <img src={bgImagePreview} alt="Background Preview" className="mt-2 w-full h-32 object-cover rounded-md" />}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Store"}
        </button>
      </form>
    </div>
  );
};

export default AddStore;

