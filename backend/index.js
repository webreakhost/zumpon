// // const express = require("express");
// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose";
// import authRoute from "./routes/auth.js"
// import vendorroute from "./routes/vendor.js"
// // const cookieParser = require('cookie-parser');
// import cookieParser from "cookie-parser";
// import path from "path";

// import dotenv from "dotenv"
// const app = express();

// app.use(express.json()); 

// app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


// dotenv.config();
// // app.use(cors());

// app.use(
//     cors({
//       origin: "http://localhost:5173", // Explicitly allow your frontend
//       credentials: true, // Allow cookies and authentication headers
//     })
//   );

//   app.use(cookieParser());

// const connectDB = async () => {
//     try {
//       await mongoose.connect(process.env.MONGO_URL);
//       console.log(`MongoDB connected`);
//     } catch (error) {
//       console.error("MongoDB connection error:", error);
//     }
//   };

// app.get("/", (req, res)=>{
//     res.send("api is woriking")
// });

// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/vendor", vendorroute)

// const PORT = process.env.PORT || 5050;

// app.listen(5050, ()=>{
//     connectDB();
//     console.log("server is ruuning on 5050")
// });





import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import vendorRoute from "./routes/vendor.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url"; // Fix for __dirname issue
import categoryRoute from "./routes/category.js";
import prductRoute from "./routes/product.js"
import cartRoute from "./routes/cart.js"
import checkoutRoute from "./routes/checkout.js"
import wishlistRoute from "./routes/wishlist.js"
import vendomsgRoute from "./routes/vendormsg.js";

dotenv.config();
const app = express();

// Fix for `__dirname` in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json()); 
app.use(cors({
  
  // origin: ["http://localhost:5173", "https://zumpon.com/"],
  origin:["http://localhost:5173","https://zumpon.com"],
  credentials: true, // Allow cookies
}));
app.use(cookieParser());

// Static Files (Fix for __dirname)
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/vendor", vendorRoute);


app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", prductRoute)
app.use("/api/v1/cart", cartRoute)
app.use("/api/v1/checkoutss", checkoutRoute)
app.use("/api/v1/wishlist", wishlistRoute)
app.use("/api/v1/vendormsg", vendomsgRoute)
// API Test Route
app.get("/", (req, res) => {
  res.send("🚀 API is working!");
});

// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
