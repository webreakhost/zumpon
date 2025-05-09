


// import { toast } from "react-toastify";
// import { BACKENDURL } from "../config/config";

// const addToCart = async (e, name, size, selectedColor) => {
//   try {
//     e?.stopPropagation();
//     e?.preventDefault();

//     if (!size) {
//       toast.error("Please select a size before adding to cart!");
//       return { error: true, message: "Size is required" };
//     }

//     // Ensure size is a valid string
//     const validSize = typeof size === "string" ? size.trim() : "";
//     if (!validSize) {
//       toast.error("Invalid size selection!");
//       return { error: true, message: "Invalid size" };
//     }

//     // Prepare payload
//     const payload = {
//       // productId: id,
//       name:name,
//       size: validSize,
//       selectedColor: selectedColor || null, // Ensure color is optional
//     };

//     console.log("Sending request to backend with payload:", payload);

//     const response = await fetch(`${BACKENDURL}/api/v1/cart/addtocart`, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     const responseData = await response.json();

//     console.log("Response from backend:", responseData);

//     if (response.ok) {
//       toast.success(responseData.message || "Product added to cart successfully!");
//       return responseData;
//     } else {
//       toast.error(responseData.message || "Failed to add product to cart.");
//       return { error: true, message: responseData.message };
//     }
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     toast.error("Something went wrong. Please try again.");
//     return { error: true, message: error.message };
//   }
// };

// export default addToCart;



import { toast } from "react-toastify";
import { BACKENDURL } from "../config/config";

const addToCart = async (e, name, size, selectedColor) => {
  try {
    e?.stopPropagation();
    e?.preventDefault();

    if (!size) {
      toast.error("Please select a size before adding to cart!");
      return { error: true, message: "Size is required" };
    }

    const validSize = typeof size === "string" ? size.trim() : "";
    if (!validSize) {
      toast.error("Invalid size selection!");
      return { error: true, message: "Invalid size" };
    }

    const payload = {
      name,
      size: validSize,
      selectedColor: selectedColor || null,
    };

    console.log("Sending request to backend with payload:", payload);

    const response = await fetch(`${BACKENDURL}/api/v1/cart/addtocart`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    console.log("Response from backend:", responseData);

    if (response.ok) {
      toast.success(responseData.message || "Product added to cart successfully!");
      return responseData;
    } else {
      toast.error(responseData.message || "Failed to add product to cart.");
      return { error: true, message: responseData.message };
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    toast.error("Something went wrong. Please try again.");
    return { error: true, message: error.message };
  }
};

export default addToCart;
