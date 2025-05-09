

// import { BACKENDURL } from "../config/config";

// const fetchWishlistProducts = async () => {
//     try {
//         const response = await fetch(BACKENDURL +  "/api/v1/wishlist/viewwish", {
//             method: "get",
//             credentials: 'include',
//             headers: {
//                 "content-type": "application/json",
//             },
//         });

//         const responseData = await response.json();
//         return responseData;
//     } catch (error) {
//         return {
//             success: false,
//             message: error.message,
//         };
//     }
// };

// export default fetchWishlistProducts;


import { BACKENDURL } from "../config/config";

// const fetchWishlistProducts = async () => {
//     try {
//         const response = await fetch(BACKENDURL + "/api/v1/wishlist/viewwish", {
//             method: "GET",
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         const responseData = await response.json();
//         return responseData;
//     } catch (error) {
//         return {
//             success: false,
//             message: error.message,
//         };
//     }
// };





const fetchWishlistProducts = async () => {
    try {
        const response = await fetch(BACKENDURL + "/api/v1/wishlist/viewwish", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        if (data.success) {
            return {
                success: true,
                data: data.data.map(item => ({
                    id: item.productId._id,
                    name: item.productId.name,
                    image: item.productId.image,
                    price: item.productId.price,
                    stock: item.productId.stock,
                })),
            };
        } else {
            return { success: false, message: data.message };
        }
    } catch (error) {
        return { success: false, message: "Failed to fetch wishlist products" };
    }
};


export default fetchWishlistProducts;