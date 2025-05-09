// import Vendor from "../models/Vendor.js";
// import User from "../models/User.js";

import Vendor from "../models/vendorSchema.js"
import User from "../models/userSchema.js"
import multer from "multer";
import path from "path";

// Set up Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/"); // Images will be stored here
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// File Filter (Allow only images)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Upload Middleware
export const upload = multer({ storage, fileFilter });

/**
 * @desc    Add a new store for a vendor with logo & background image
 * @route   POST /api/vendors/add-store
 * @access  Private (Vendor only)
 */
export const addStore = async (req, res) => {
  try {
    const { userId, shopName, description, shopUrl, phoneNumber } = req.body;

    // Check if user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if vendor store already exists
    const existingVendor = await Vendor.findOne({ userId });
    if (existingVendor) {
      return res.status(400).json({ message: "Vendor store already exists for this user" });
    }

    // Get uploaded file paths
    const logo = req.files["logo"] ? `/uploads/${req.files["logo"][0].filename}` : null;
    const bgimage = req.files["bgimage"] ? `/uploads/${req.files["bgimage"][0].filename}` : null;

    // Create new vendor store
    const newVendor = new Vendor({
      userId,
      shopName,
      description,
      shopUrl,
      logo,
      bgimage,
      phoneNumber,
      productsByCategory: [],
    });

    // Save vendor in the database
    await newVendor.save();

    res.status(201).json({
      message: "Store created successfully",
      vendor: newVendor,
    });
  } catch (error) {
    console.error("Error adding store:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// export const addStore = async (req, res) => {
//   try {
//     const { userId, shopName, description, shopUrl, phoneNumber } = req.body;

//     // Check if user exists
//     const userExists = await User.findById(userId);
//     if (!userExists) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if vendor store already exists
//     const existingVendor = await Vendor.findOne({ userId });
//     if (existingVendor) {
//       if (!existingVendor.isApproved) {
//         return res.status(403).json({ message: "Vendor is not approved to add a store" });
//       }
//       return res.status(400).json({ message: "Vendor store already exists for this user" });
//     }

//     // Get uploaded file paths
//     const logo = req.files["logo"] ? `/uploads/${req.files["logo"][0].filename}` : null;
//     const bgimage = req.files["bgimage"] ? `/uploads/${req.files["bgimage"][0].filename}` : null;

//     // Create new vendor store
//     const newVendor = new Vendor({
//       userId,
//       shopName,
//       description,
//       shopUrl,
//       logo,
//       bgimage,
//       phoneNumber,
//       productsByCategory: [],
//       isApproved: true, // Ensure the vendor is approved before adding a store
//     });

//     // Save vendor in the database
//     await newVendor.save();

//     res.status(201).json({
//       message: "Store created successfully",
//       vendor: newVendor,
//     });
//   } catch (error) {
//     console.error("Error adding store:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };



export const getAllStores = async (req, res) => {
  try {
    const stores = await Vendor.find();

    res.status(200).json({
      message: "Stores retrieved successfully",
      stores,
    });
  } catch (error) {
    console.error("Error fetching stores:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getSingleStore = async (req, res) => {
  try {
    const { shopName } = req.params;
    const decodedShopName = decodeURIComponent(shopName.trim());

    // Find the store by shopName (case-insensitive)
    const store = await Vendor.findOne({
      shopName: { $regex: new RegExp(`^${decodedShopName}$`, "i") }
    });

    if (!store) {
      return res.status(404).json({
        message: "Store not found",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      message: "Store retrieved successfully",
      success: true,
      data: store,
    });
  } catch (error) {
    console.error("Error fetching store:", error);
    res.status(500).json({
      message: "Server error",
      error: true,
      success: false,
    });
  }
};



export const getVendorDetails = async (req, res) => {
  try {
    const { vendorId } = req.params;

    if (!vendorId) {
      return res.status(400).json({ message: "Vendor ID is required", success: false });
    }

    const vendor = await Vendor.findById(vendorId).populate("productsByCategory"); // Correct field name

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found", success: false });
    }

    res.status(200).json({
      success: true,
      vendor,
    });

  } catch (error) {
    console.error("Error fetching vendor details:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};


export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("productsByCategory");

    if (!vendors.length) {
      return res.status(404).json({ message: "No vendors found", success: false });
    }

    res.status(200).json({
      success: true,
      vendors,
    });
  } catch (error) {
    console.error("Error fetching vendors:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};



export const approveVendor = async (req, res) => {
  try {
    const { vendorId } = req.params;

    if (!vendorId) {
      return res.status(400).json({ message: "Vendor ID is required", success: false });
    }

    const vendor = await Vendor.findById(vendorId);

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found", success: false });
    }

    // Update vendor approval status
    vendor.isApproved = true;
    await vendor.save();

    res.status(200).json({
      success: true,
      message: "Vendor approved successfully",
      vendor,
    });
  } catch (error) {
    console.error("Error approving vendor:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};
