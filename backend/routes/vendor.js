// import express from "express";
// import { addStore } from "../controller/VendorController.js";

// const router = express.Router();

// router.post("/add-store", addStore);

// export default router;



import express from "express";
import { addStore, upload, getAllStores,getSingleStore,getAllVendors,approveVendor } from "../controller/VendorController.js";

const router = express.Router();

// Route to add a vendor store with image uploads
router.post(
  "/add-store",
  upload.fields([
    { name: "logo", maxCount: 1 }, 
    { name: "bgimage", maxCount: 1 }
  ]),
  addStore
);

router.get("/stores", getAllStores);
router.get("/store/:shopName", getSingleStore);
router.get("/vendors", getAllVendors);

// Route to approve a vendor (Admin Only)
router.put("/approve/:vendorId", approveVendor);


export default router;
