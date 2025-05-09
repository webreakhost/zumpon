





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { BACKENDURL } from '../config/config';
// import DynamicHead from '../component/DynamicHead';

// const Wishlist = () => {
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadWishlist = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(`${BACKENDURL}/api/v1/wishlist/viewwish`, {
//                     withCredentials: true,
//                 });
//                 if (response.data.success) {
//                     setWishlistItems(response.data.data);
//                 } else {
//                     setError(response.data.message);
//                 }
//             } catch (err) {
//                 setError('Failed to fetch wishlist items.');
//             }
//             setLoading(false);
//         };

//         loadWishlist();
//     }, []);

//     const handleRemoveFromWishlist = async (productId) => {
//         try {
//             const response = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, {
//                 withCredentials: true,
//             });

//             if (response.data.success) {
//                 setWishlistItems((prevItems) =>
//                     prevItems.filter((item) => {
//                         const product = item.productId || item;
//                         return product._id !== productId;
//                     })
//                 );
//             } else {
//                 alert(response.data.message || "Failed to remove item from wishlist");
//             }
//         } catch (err) {
//             alert(err.response?.data?.message || "An error occurred while removing the item.");
//         }
//     };

//     return (
//         <>
//             <DynamicHead
//                 title="Your Wishlist - Zumpon"
//                 description="View and manage your saved products on Zumpon. Easily add items to your cart or keep track of your favorite picks."
//                 keywords="Wishlist, Saved Products, Favorite Items, Zumpon Wishlist"
//                 image="https://zumpon.com/images/wishlist-banner.png"
//                 url="https://zumpon.com/wishlist"
//                 author="Zumpon Team"
//             />
//             <main className="main wishlist-page">
//                 <div className="page-header">
//                     <div className="container">
//                         <h1 className="page-title mb-0">Wishlist</h1>
//                     </div>
//                 </div>

//                 <nav className="breadcrumb-nav mb-10">
//                     <div className="container">
//                         <ul className="breadcrumb">
//                             <li><a href="/">Home</a></li>
//                             <li>Wishlist</li>
//                         </ul>
//                     </div>
//                 </nav>

//                 <div className="page-content">
//                     <div className="container">
//                         <h3 className="wishlist-title">My Wishlist</h3>

//                         {loading ? (
//                             <p>Loading wishlist...</p>
//                         ) : error ? (
//                             <p className="error-message">{error}</p>
//                         ) : wishlistItems.length === 0 ? (
//                             <p>Your wishlist is empty.</p>
//                         ) : (
//                             <table className="shop-table wishlist-table">
//                                 <thead>
//                                     <tr>
//                                         <th className="product-name">Product</th>
//                                         <th></th>
//                                         <th className="product-price">Price</th>
//                                         <th className="product-stock-status">Stock Status</th>
//                                         <th className="wishlist-action">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {wishlistItems.map(item => {
//                                         const product = item.productId || item;
//                                         const productId = product._id;
//                                         const productImage = product.image
//                                             ? `${BACKENDURL}/uploads/product/${product.images.split("\\").pop()}`
//                                             : "/assets/images/shop/default.jpg";

//                                         return (
//                                             <tr key={productId}>
//                                                 <td className="product-thumbnail">
//                                                     <div className="p-relative">
//                                                         <a href={`/product/${product.name}`}>
//                                                             <figure>
//                                                                 <img
//                                                                     src={productImage}
//                                                                     alt={product.name}
//                                                                     width="200"
//                                                                     height="200"
//                                                                 />
//                                                             </figure>
//                                                         </a>
//                                                         <button
//                                                             type="button"
//                                                             className="btn btn-close"
//                                                             onClick={() => handleRemoveFromWishlist(productId)}
//                                                         >
//                                                             <i className="fas fa-times"></i>
//                                                         </button>
//                                                     </div>
//                                                 </td>
//                                                 <td className="product-name">
//                                                     <a href="#">{product.name}</a>
//                                                 </td>
//                                                 <td className="product-price">
//                                                     <ins className="new-price">{product.price}</ins>
//                                                 </td>
//                                                 <td className="product-stock-status">
//                                                     <span className="wishlist-in-stock">{product.stock}</span>
//                                                 </td>
//                                                 <td className="wishlist-action">
//                                                     <div className="d-lg-flex">
//                                                         <Link
//                                                             to={`/product/${product.name}`}
//                                                             className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
//                                                         >
//                                                             Quick View
//                                                         </Link>
//                                                         <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to Cart</a>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         );
//                                     })}
//                                 </tbody>
//                             </table>
//                         )}

//                         <div className="social-links">
//                             <label>Share On:</label>
//                             <div className="social-icons social-no-color border-thin">
//                                 <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
//                                 <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
//                                 <a href="#" className="social-icon social-pinterest w-icon-pinterest"></a>
//                                 <a href="#" className="social-icon social-email far fa-envelope"></a>
//                                 <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default Wishlist;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BACKENDURL } from '../config/config';
import DynamicHead from '../component/DynamicHead';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWishlist = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${BACKENDURL}/api/v1/wishlist/viewwish`, {
                    withCredentials: true,
                });
                if (response.data.success) {
                    setWishlistItems(response.data.data);
                } else {
                    setError(response.data.message);
                }
            } catch (err) {
                setError('Failed to fetch wishlist items.');
            }
            setLoading(false);
        };

        loadWishlist();
    }, []);

    const handleRemoveFromWishlist = async (productId) => {
        try {
            const response = await axios.delete(`${BACKENDURL}/api/v1/wishlist/remove/${productId}`, {
                withCredentials: true,
            });

            if (response.data.success) {
                setWishlistItems((prevItems) =>
                    prevItems.filter((item) => {
                        const product = item.productId || item;
                        return product._id !== productId;
                    })
                );
            } else {
                alert(response.data.message || "Failed to remove item from wishlist");
            }
        } catch (err) {
            alert(err.response?.data?.message || "An error occurred while removing the item.");
        }
    };

    return (
        <>
            <DynamicHead
                title="Your Wishlist - Zumpon"
                description="View and manage your saved products on Zumpon. Easily add items to your cart or keep track of your favorite picks."
                keywords="Wishlist, Saved Products, Favorite Items, Zumpon Wishlist"
                image="https://zumpon.com/images/wishlist-banner.png"
                url="https://zumpon.com/wishlist"
                author="Zumpon Team"
            />
            <main className="main wishlist-page">
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-title mb-0">Wishlist</h1>
                    </div>
                </div>

                <nav className="breadcrumb-nav mb-10">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <h3 className="wishlist-title">My Wishlist</h3>

                        {loading ? (
                            <p>Loading wishlist...</p>
                        ) : error ? (
                            <p className="error-message">{error}</p>
                        ) : wishlistItems.length === 0 ? (
                            <p>Your wishlist is empty.</p>
                        ) : (
                            <table className="shop-table wishlist-table">
                                <thead>
                                    <tr>
                                        <th className="product-name">Product</th>
                                        <th></th>
                                        <th className="product-price">Price</th>
                                        <th className="product-stock-status">Stock Status</th>
                                        <th className="wishlist-action">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlistItems.map(item => {
                                        const product = item.productId || item;
                                        const productId = product._id;

                                        let productImage = "/assets/images/shop/default.jpg";
                                        try {
                                            const firstImagePath = product?.images?.[0]?.urls?.[0];
                                            if (firstImagePath) {
                                                const imageName = firstImagePath.split("\\").pop();
                                                productImage = `${BACKENDURL}/uploads/product/${imageName}`;
                                            }
                                        } catch (err) {
                                            console.error("Image parsing error:", err);
                                        }

                                        return (
                                            <tr key={productId}>
                                                <td className="product-thumbnail">
                                                    <div className="p-relative">
                                                        <a href={`/${product.name}`}>
                                                            <figure>
                                                                <img
                                                                    src={productImage}
                                                                    alt={product.name}
                                                                    width="200"
                                                                    height="200"
                                                                />
                                                            </figure>
                                                        </a>
                                                        <button
                                                            type="button"
                                                            className="btn btn-close"
                                                            onClick={() => handleRemoveFromWishlist(productId)}
                                                        >
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">{product.name}</a>
                                                </td>
                                                <td className="product-price">
                                                    <ins className="new-price">{product.price}</ins>
                                                </td>
                                                <td className="product-stock-status">
                                                    <span className="wishlist-in-stock">{product.
stock}</span>
                                                </td>
                                                <td className="wishlist-action">
                                                    <div className="d-lg-flex">
                                                        <Link
                                                            to={`/${product.name}`}
                                                            className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
                                                        >
                                                            Quick View
                                                        </Link>
                                                        <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to Cart</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}

                        <div className="social-links">
                            <label>Share On:</label>
                            <div className="social-icons social-no-color border-thin">
                                <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                <a href="#" className="social-icon social-pinterest w-icon-pinterest"></a>
                                <a href="#" className="social-icon social-email far fa-envelope"></a>
                                <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Wishlist;
