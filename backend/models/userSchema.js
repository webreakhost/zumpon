import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "default-profile.png",
    },
    role: {
      type: String,
      enum: ["admin", "vendor", "customer"],
      default: "customer",
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    

    phoneNumber: {
        type: String,
        required: function () {
          return this.role === "vendor"; // Only required if the role is vendor
        },
      },

    // Vendor-specific fields
    shop: {
      name: { type: String, trim: true },
      description: { type: String, trim: true },
      shopUrl: { type: String, unique: true, sparse: true },
      logo: { type: String },
      products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
      isApproved: { type: Boolean, default: false }, // Admin approval for vendors
    },

    // Customer-specific fields
    addresses: [
      {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
        isDefault: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema)
