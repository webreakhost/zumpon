// import mongoose from "mongoose";

// const addToCart = mongoose.Schema({
//     productId: {
//         ref: 'product',
//         type: String,
//     },
//     quantity: Number,
//     userId: String,
//     size: String, // Add this field
// }, {
//     timestamps: true
// });

// const addToCartModel = mongoose.model("addToCart",addToCart)

// module.exports = addToCartModel



// import mongoose from "mongoose";

// const CartSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//         color: String,
//         size: String,
//         quantity: { type: Number, required: true, min: 1 },
//         price: { type: Number, required: true },
//       },
//     ],
//     totalPrice: { type: Number, required: true },
//     totalQuantity: { type: Number, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Cart", CartSchema);


// const CartSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//         selectedColor: String, // ✅ Add this line
//         size: String,
//         quantity: { type: Number, required: true, min: 1 },
//         price: { type: Number, required: true },
//       },
//     ],
//     totalPrice: { type: Number, required: true },
//     totalQuantity: { type: Number, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Cart", CartSchema);


import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        color: String, // ✅ Use 'color' instead of 'selectedColor'
        size: String,
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
