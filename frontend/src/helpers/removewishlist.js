// import axios from 'axios';
// import { BACKENDURL } from '../config/config';

// const removeFromWishlist = async (productId) => {
//     try {
//         const response = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, {
//             withCredentials: true
//         });
//         return response.data;
//     } catch (error) {
//         return {
//             success: false,
//             message: error.response?.data?.message || "Failed to remove item from wishlist",
//             error: true
//         };
//     }
// };

// export default removeFromWishlist;



import axios from "axios";
import { BACKENDURL } from "../config/config";

const removeWishlistProduct = async (productId) => {
  try {
    const response = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`,{
        withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { success: false, message: error.response?.data?.message || "Failed to remove item from wishlist." };
  }
};

export default removeWishlistProduct;