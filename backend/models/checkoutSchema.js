// import mongoose from "mongoose";

// const CheckouteSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     products: [
//       {
//         productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//         vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
//         name: { type: String, required: true },
//         quantity: { type: Number, required: true },
//         price: { type: Number, required: true },
//         size: { type: String, required: true },
//       },
//     ],
//     totalAmount: { type: Number, required: true },
//     billingDetails: {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//       country: { type: String, required: true },
//       streetAddress1: { type: String, required: true },
//       streetAddress2: { type: String },
//       city: { type: String, required: true },
//       state: { type: String, required: true },
//       zip: { type: String, required: true },
//       phone: { type: String, required: true },
//       email: { type: String, required: true },
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Checkoute", CheckouteSchema);



import mongoose from "mongoose";

const CheckouteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        size: { type: String, required: true },
        color: { type: String }, // 🆕 selected color
    image: { type: String }, // 🆕 selected image path
      },
    ],
    totalAmount: { type: Number, required: true },
    currency: { type: String, default: "INR" }, // New field

    razorpayOrderId: { type: String }, // New field
    paymentStatus: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },

    billingDetails: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      country: { type: String, required: true },
      streetAddress1: { type: String, required: true },
      streetAddress2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },

    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Checkoute", CheckouteSchema);
