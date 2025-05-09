

// import mongoose from "mongoose";
// import Product from "../models/productSchema.js"; // Import Product model

// const vendorSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//       unique: true, // Ensure a user can only be linked to one vendor profile
//     },
//     shopName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       trim: true,
//     },
//     shopUrl: {
//       type: String,
//       unique: true,
//       sparse: true,
//     },
//     logo: String,
//     bgimage: String,
//     products: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product", // Ensure Product model is registered
//       },
//     ],
//     phoneNumber: {
//       type: String,
//       required: true,
//     },
//     productsByCategory: [
//       {
//         category: {
//           type: String,
//           required: true,
//         },
//         products: [
//           {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Product",
//           },
//         ],
//       },
//     ],
//     isApproved: {
//       type: Boolean,
//       default: false, // Admin approval required before vendor can start selling
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Vendor", vendorSchema);



// import mongoose from "mongoose";

// const vendorSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     shopName: {
//       type: String,
//       required: true,
//     },
//     description: String,
//     shopUrl: String,
//     logo: String,
//     bgimage: String,
//     phoneNumber: String,
//     products: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//       },
//     ],
//     isApproved: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Vendor", vendorSchema);



import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
  shopName: { type: String, required: true, unique: true },
  description: String,
  shopUrl: String,
  logo: String,
  bgimage: String,
  phoneNumber: String,
  productsByCategory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  isApproved: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Vendor", VendorSchema);