



import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stars: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  
  description: String,
  price: Number,
  category: String,
  brand: String,
  stock: Number,
  isFeatured: Boolean,
  specifications: Object,
  variants: Array,
  
  colors: [
    {
      color: { type: String, required: true },
      images: [{ type: String }], // URLs of images for this color
    },
  ],
  sizes: [
    {
      size: { type: String, required: true }, // Example: S, M, L, XL
      stock: { type: Number, required: true },
      additionalPrice: { type: Number, default: 0 }, // Extra cost for specific sizes
    },
  ],
  images: [{ color: String, urls: [String] }],
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  reviews: [reviewSchema],
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
}, { timestamps: true });



export default mongoose.model("Product", ProductSchema);
