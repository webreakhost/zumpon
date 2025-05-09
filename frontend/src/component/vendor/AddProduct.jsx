



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import { useSelector } from "react-redux";

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
//     colors: [],
//     sizes: [],
//   });

//   const [categories, setCategories] = useState([]);
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

//   const handleAddColor = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       colors: [...prevData.colors, { color: "" }],
//     }));
//   };

//   const handleColorChange = (index, value) => {
//     const updatedColors = [...formData.colors];
//     updatedColors[index].color = value;
//     setFormData((prevData) => ({ ...prevData, colors: updatedColors }));
//   };

//   const handleAddSize = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       sizes: [...prevData.sizes, { size: "", stock: 0, additionalPrice: 0 }],
//     }));
//   };

//   const handleSizeChange = (index, field, value) => {
//     const updatedSizes = [...formData.sizes];
//     updatedSizes[index][field] = value;
//     setFormData((prevData) => ({ ...prevData, sizes: updatedSizes }));
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
//       await axios.post(`${BACKENDURL}/api/v1/product/upload`, formDataObj, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
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
//         colors: [],
//         sizes: [],
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

//         <div>
//           <label>Colors:</label>
//           {formData.colors.map((color, index) => (
//             <input key={index} type="text" placeholder="Color Name" className="input-field" value={color.color} onChange={(e) => handleColorChange(index, e.target.value)} />
//           ))}
//           <button type="button" className="btn-add" onClick={handleAddColor}>+ Add Color</button>
//         </div>

//         <div>
//           <label className="block text-gray-700">Product Sizes:</label>
//           {formData.sizes.map((size, index) => (
//             <div key={index} className="flex gap-2">
//               <input type="text" placeholder="Size" className="input-field" value={size.size} onChange={(e) => handleSizeChange(index, "size", e.target.value)} />
//               <input type="number" placeholder="Stock" className="input-field" value={size.stock} onChange={(e) => handleSizeChange(index, "stock", Number(e.target.value))} />
//               <input type="number" placeholder="Additional Price" className="input-field" value={size.additionalPrice} onChange={(e) => handleSizeChange(index, "additionalPrice", Number(e.target.value))} />
//             </div>
//           ))}
//           <button type="button" className="btn-add" onClick={handleAddSize}>+ Add Size</button>
//         </div>

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Upload Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;




import { useState, useEffect } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const { vendorDetails } = useSelector((state) => state.user);
  const initialShopName = vendorDetails?.shopName || "";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    shopName: initialShopName,
    stock: "",
    isFeatured: false,
    specifications: {},
    variants: [],
    colors: [],
    sizes: [],
  });

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length !== 4) {
      alert("Please upload exactly 4 images.");
      return;
    }
    setImages(selectedFiles);
  };

  const handleAddColor = () => {
    setFormData((prevData) => ({
      ...prevData,
      colors: [...prevData.colors, { color: "", image: null }],
    }));
  };

  const handleColorChange = (index, value) => {
    const updatedColors = [...formData.colors];
    updatedColors[index].color = value;
    setFormData((prevData) => ({ ...prevData, colors: updatedColors }));
  };

  const handleColorImageChange = (index, file) => {
    const updatedColors = [...formData.colors];
    updatedColors[index].image = file;
    setFormData((prevData) => ({ ...prevData, colors: updatedColors }));
  };

  const handleAddSize = () => {
    setFormData((prevData) => ({
      ...prevData,
      sizes: [...prevData.sizes, { size: "", stock: 0, additionalPrice: 0 }],
    }));
  };

  const handleSizeChange = (index, field, value) => {
    const updatedSizes = [...formData.sizes];
    updatedSizes[index][field] = value;
    setFormData((prevData) => ({ ...prevData, sizes: updatedSizes }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (images.length !== 4) {
  //     alert("You must upload exactly 4 images.");
  //     return;
  //   }

  //   const formDataObj = new FormData();
  //   Object.keys(formData).forEach((key) => {
  //     if (key === "colors") {
  //       const colorsWithoutImages = formData.colors.map(({ color }) => ({ color }));
  //       formDataObj.append("colors", JSON.stringify(colorsWithoutImages));
  //     } else if (typeof formData[key] === "object" && key !== "shopName") {
  //       formDataObj.append(key, JSON.stringify(formData[key]));
  //     } else {
  //       formDataObj.append(key, formData[key]);
  //     }
  //   });

  //   images.forEach((image) => {
  //     formDataObj.append("images", image);
  //   });

  //   // Append color images separately
  //   formData.colors.forEach((item, index) => {
  //     if (item.image) {
  //       formDataObj.append(`colorImages`, item.image);
  //     }
  //   });

  //   try {
  //     await axios.post(`${BACKENDURL}/api/v1/product/upload`, formDataObj, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     alert("Product uploaded successfully!");
  //     setFormData({
  //       name: "",
  //       description: "",
  //       price: "",
  //       category: "",
  //       brand: "",
  //       shopName: initialShopName,
  //       stock: "",
  //       isFeatured: false,
  //       specifications: {},
  //       variants: [],
  //       colors: [],
  //       sizes: [],
  //     });
  //     setImages([]);
  //   } catch (error) {
  //     console.error("Upload failed", error);
  //     alert("Failed to upload product");
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (images.length !== 4) {
      alert("You must upload exactly 4 images.");
      return;
    }
  
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "colors") {
        const colorsWithoutImages = formData.colors.map(({ color }) => ({ color }));
        formDataObj.append("colors", JSON.stringify(colorsWithoutImages));
      } else if (typeof formData[key] === "object" && key !== "shopName") {
        formDataObj.append(key, JSON.stringify(formData[key]));
      } else {
        formDataObj.append(key, formData[key]);
      }
    });
  
    images.forEach((image) => {
      formDataObj.append("images", image);
    });
  
    // ✅ Append color images with key "colorImages"
    // formData.colors.forEach((item) => {
    //   if (item.image) {
    //     formDataObj.append("colorImages", item.image);
    //   }
    // });

    formData.colors.forEach((item) => {
      if (item.image) {
        // ✅ Rename file to include color in filename
        const renamedFile = new File([item.image], `${item.color}-${item.image.name}`, {
          type: item.image.type,
        });
        formDataObj.append("colorImages", renamedFile);
      }
    });
  
    try {
      await axios.post(`${BACKENDURL}/api/v1/product/upload`, formDataObj, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product uploaded successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        shopName: initialShopName,
        stock: "",
        isFeatured: false,
        specifications: {},
        variants: [],
        colors: [],
        sizes: [],
      });
      setImages([]);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to upload product");
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Upload New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" className="input-field" onChange={handleInputChange} required />
        <textarea name="description" placeholder="Description" className="input-field" onChange={handleInputChange} required></textarea>
        <input type="number" name="price" placeholder="Price" className="input-field" onChange={handleInputChange} required />
        <select name="category" className="input-field" onChange={handleInputChange} required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
        <input type="text" name="brand" placeholder="Brand" className="input-field" onChange={handleInputChange} />
        {vendorDetails ? (
          <input type="text" name="shopName" value={formData.shopName} disabled className="input-field bg-gray-100" />
        ) : (
          <input type="text" name="shopName" placeholder="Shop Name" className="input-field" onChange={handleInputChange} required />
        )}

        <input type="number" name="stock" placeholder="Stock Quantity" className="input-field" onChange={handleInputChange} required />

        <label className="block text-gray-700">Upload 4 Product Images:</label>
        <input type="file" multiple accept="image/*" className="border p-2 w-full" onChange={handleImageChange} />

        <div>
          <label className="block text-gray-700">Colors:</label>
          {formData.colors.map((color, index) => (
            <div key={index} className="space-y-2">
              <input type="text" placeholder="Color Name" className="input-field" value={color.color} onChange={(e) => handleColorChange(index, e.target.value)} />
              <input type="file" accept="image/*" className="input-field" onChange={(e) => handleColorImageChange(index, e.target.files[0])} />
            </div>
          ))}
          <button type="button" className="btn-add" onClick={handleAddColor}>+ Add Color</button>
        </div>

        <div>
          <label className="block text-gray-700">Product Sizes:</label>
          {formData.sizes.map((size, index) => (
            <div key={index} className="flex gap-2">
              <input type="text" placeholder="Size" className="input-field" value={size.size} onChange={(e) => handleSizeChange(index, "size", e.target.value)} />
              <input type="number" placeholder="Stock" className="input-field" value={size.stock} onChange={(e) => handleSizeChange(index, "stock", Number(e.target.value))} />
              <input type="number" placeholder="Additional Price" className="input-field" value={size.additionalPrice} onChange={(e) => handleSizeChange(index, "additionalPrice", Number(e.target.value))} />
            </div>
          ))}
          <button type="button" className="btn-add" onClick={handleAddSize}>+ Add Size</button>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Upload Product</button>
      </form>
    </div>
  );
};

export default AddProduct;




