



import { useState, useEffect } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(null);
  const [parentCategory, setParentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch existing categories (for parent category selection)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(BACKENDURL + "/api/v1/category/add-category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle File Upload
  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (logo) formData.append("logo", logo);
    if (parentCategory) formData.append("parentCategory", parentCategory);

    try {
      const response = await axios.post(BACKENDURL + "/api/v1/category/add-category", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
      setName("");
      setDescription("");
      setLogo(null);
      setParentCategory("");
    } catch (error) {
      console.error("Error adding category", error);
      setMessage(error.response?.data?.message || "Error adding category");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Category Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Category Logo</label>
          <input type="file" className="w-full" onChange={handleFileChange} />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Parent Category</label>
          <select
            className="w-full border p-2 rounded"
            value={parentCategory}
            onChange={(e) => setParentCategory(e.target.value)}
          >
            <option value="">None</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;




// add product code 

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom"; // Used to fetch products for a specific vendor

// const AddProduct = () => {
//   const { vendorDetails } = useSelector((state) => state.user);
//   const initialShopName = vendorDetails?.shopName || "";

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     brand: "",
//     shopName: initialShopName,
//     stock: "",
//     isFeatured: false,
//     specifications: {},
//     variants: [],
//   });

//   const [categories, setCategories] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     if (selectedFiles.length !== 4) {
//       alert("Please upload exactly 4 images.");
//       return;
//     }
//     setImages(selectedFiles);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (images.length !== 4) {
//       alert("You must upload exactly 4 images.");
//       return;
//     }

//     const formDataObj = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (typeof formData[key] === "object" && key !== "shopName") {
//         formDataObj.append(key, JSON.stringify(formData[key]));
//       } else {
//         formDataObj.append(key, formData[key]);
//       }
//     });

//     images.forEach((image) => {
//       formDataObj.append("images", image);
//     });

//     try {
//       const response = await axios.post(
//         `${BACKENDURL}/api/v1/product/upload`,
//         formDataObj,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       alert("Product uploaded successfully!");
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         category: "",
//         brand: "",
//         shopName: initialShopName,
//         stock: "",
//         isFeatured: false,
//         specifications: {},
//         variants: [],
//       });
//       setImages([]);
//     } catch (error) {
//       console.error("Upload failed", error);
//       alert("Failed to upload product");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h2 className="text-2xl font-semibold mb-4">Upload New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" placeholder="Product Name" className="input-field" onChange={handleInputChange} required />
//         <textarea name="description" placeholder="Description" className="input-field" onChange={handleInputChange} required></textarea>
//         <input type="number" name="price" placeholder="Price" className="input-field" onChange={handleInputChange} required />
//         <select name="category" className="input-field" onChange={handleInputChange} required>
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>{cat.name}</option>
//           ))}
//         </select>
//         <input type="text" name="brand" placeholder="Brand" className="input-field" onChange={handleInputChange} />
//         {vendorDetails ? (
//           <input type="text" name="shopName" value={formData.shopName} disabled className="input-field bg-gray-100" />
//         ) : (
//           <input type="text" name="shopName" placeholder="Shop Name" className="input-field" onChange={handleInputChange} required />
//         )}
//         <input type="number" name="stock" placeholder="Stock Quantity" className="input-field" onChange={handleInputChange} required />
//         <label className="block text-gray-700">Upload 4 Product Images:</label>
//         <input type="file" multiple accept="image/*" className="border p-2 w-full" onChange={handleImageChange} />
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Upload Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;




