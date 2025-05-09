
import CartModel from "../models/cartSchema.js"
import Product from "../models/productSchema.js"





export const countCartController = async (req, res) => {
  try {
    const userId = req.userId; // Set by authentication middleware

    const cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(200).json({
        data: {
          count: 0,
        },
        message: "Cart is empty",
        success: true,
        error: false,
      });
    }

    return res.status(200).json({
      data: {
        count: cart.totalQuantity,
      },
      message: "Cart item count retrieved successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    console.error("Count Cart Error:", err);
    res.status(500).json({
      message: err?.message || "Internal server error",
      success: false,
      error: true,
    });
  }
};


  export const addToCartController = async (req, res) => {
    try {
      const { name, size, selectedColor } = req.body;
      const userId = req.userId; // Assuming auth middleware sets this
  
      if (!name || !size) {
        return res.status(400).json({
          message: "Product name and size are required",
          success: false,
          error: true,
        });
      }
  
      // Find the product by name
      const product = await Product.findOne({ name });
      if (!product) {
        console.error("Product not found for name:", name);
        return res.status(404).json({
          message: "Product not found",
          success: false,
          error: true,
        });
      }
  
      const sizeInfo = product.sizes?.find((s) => s.size === size);
      if (!sizeInfo) {
        return res.status(400).json({
          message: "Invalid size selection",
          success: false,
          error: true,
        });
      }
  
      const finalPrice = product.price + (sizeInfo.additionalPrice || 0);
  
      let cart = await CartModel.findOne({ user: userId });
  
      if (!cart) {
        cart = new CartModel({
          user: userId,
          items: [],
          totalPrice: 0,
          totalQuantity: 0,
        });
      }
  
      const existingItem = cart.items.find(
        (item) =>
          item.product.toString() === product._id.toString() &&
          item.size === size &&
          item.color === selectedColor
      );
  
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({
          product: product._id,
          size,
          color: selectedColor || null,
          quantity: 1,
          price: finalPrice,
        });
      }
  
      cart.totalPrice = cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  
      await cart.save();
  
      return res.status(200).json({
        data: cart,
        message: "Product added to cart",
        success: true,
        error: false,
      });
    } catch (err) {
      console.error("Add to Cart Error:", err);
      res.status(500).json({
        message: err?.message || "Internal server error",
        error: true,
        success: false,
      });
    }
  };
  

//   export const getCartController = async (req, res) => {
//     try {
//       const userId = req.userId; // Assuming authentication middleware sets req.userId
  
//       // Fetch the cart with populated product details
//       const cart = await CartModel.findOne({ user: userId }).populate({
//         path: "items.product",
//         select: "name price images", // Fetch necessary fields
//       });
  
//       if (!cart) {
//         return res.status(404).json({
//           message: "Cart is empty",
//           success: false,
//           error: true,
//         });
//       }
  
//       // Process the cart items to extract the first available image
//       const cartWithImages = cart.items.map((item) => {
//         let product = item.product;
        
//         // Extract the first image from the images array
//         let productImage = null;
//         if (product.images && product.images.length > 0) {
//           productImage = product.images[0].urls.length > 0 ? product.images[0].urls[0] : null;
//         }
  
//         return {
//           _id: item._id,
//           product: {
//             _id: product._id,
//             name: product.name,
//             price: product.price,
//             image: productImage, // Attach the image
//           },
//           size: item.size,
//           quantity: item.quantity,
//           price: item.price,
          
// color: item.color,
//         };
//       });
  
//       return res.status(200).json({
//         data: {
//           _id: cart._id,
//           user: cart.user,
//           items: cartWithImages,
//           totalPrice: cart.totalPrice,
//           totalQuantity: cart.totalQuantity,
//           createdAt: cart.createdAt,
//           updatedAt: cart.updatedAt,
//         },
//         message: "Cart retrieved successfully",
//         success: true,
//         error: false,
//       });
//     } catch (err) {
//       console.error("Get Cart Error:", err);
//       res.status(500).json({
//         message: err?.message || "Internal server error",
//         error: true,
//         success: false,
//       });
//     }
//   };


export const getCartController = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await CartModel.findOne({ user: userId }).populate({
      path: "items.product",
      select: "name price images colors", // include 'colors' to get variant images
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart is empty",
        success: false,
        error: true,
      });
    }

    // Map and process items
    const cartWithImages = cart.items.map((item) => {
      const product = item.product;

      let productImage = null;

      // First try to find image from selected color
      if (item.color && product.colors && product.colors.length > 0) {
        const matchedColor = product.colors.find(
          (colorObj) => colorObj.color.toLowerCase() === item.color.toLowerCase()
        );
        if (matchedColor && matchedColor.images.length > 0) {
          productImage = matchedColor.images[0]; // Use first image for the color
        }
      }

      // Fallback to default image
      if (!productImage && product.images && product.images.length > 0) {
        productImage = product.images[0].urls.length > 0 ? product.images[0].urls[0] : null;
      }

      return {
        _id: item._id,
        product: {
          _id: product._id,
          name: product.name,
          price: product.price,
          image: productImage,
        },
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.price,
      };
    });

    return res.status(200).json({
      data: {
        _id: cart._id,
        user: cart.user,
        items: cartWithImages,
        totalPrice: cart.totalPrice,
        totalQuantity: cart.totalQuantity,
        createdAt: cart.createdAt,
        updatedAt: cart.updatedAt,
      },
      message: "Cart retrieved successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    console.error("Get Cart Error:", err);
    res.status(500).json({
      message: err?.message || "Internal server error",
      error: true,
      success: false,
    });
  }
};






export const removeFromCartController = async (req, res) => {
  try {
    const userId = req.userId; // Assuming authentication middleware sets req.userId
    const { productId } = req.params;

    // Find the cart
    const cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
        success: false,
        error: true,
      });
    }

    // Find the index of the item to remove
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

    if (itemIndex === -1) {
      return res.status(404).json({
        message: "Product not found in cart",
        success: false,
        error: true,
      });
    }

    // Remove the item from the cart
    const removedItem = cart.items.splice(itemIndex, 1)[0];

    // Update total price and quantity
    cart.totalPrice -= removedItem.price * removedItem.quantity;
    cart.totalQuantity -= removedItem.quantity;

    // If cart is empty after removal, delete it
    if (cart.items.length === 0) {
      await CartModel.findByIdAndDelete(cart._id);
      return res.status(200).json({
        message: "Product removed. Cart is now empty",
        success: true,
        error: false,
      });
    }

    // Save the updated cart
    await cart.save();

    return res.status(200).json({
      message: "Product removed from cart",
      success: true,
      error: false,
      data: {
        _id: cart._id,
        user: cart.user,
        items: cart.items,
        totalPrice: cart.totalPrice,
        totalQuantity: cart.totalQuantity,
        updatedAt: cart.updatedAt,
      },
    });
  } catch (err) {
    console.error("Remove From Cart Error:", err);
    res.status(500).json({
      message: err?.message || "Internal server error",
      error: true,
      success: false,
    });
  }
};



