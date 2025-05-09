// import express from "express";
// import { uploadProduct } from "../controller/productController.js";
// // import { upload } from "../config/cloudinaryConfig.js";
// import { upload } from "../config/cloudinaryConfig.js";

// const router = express.Router();

// router.post("/upload", upload.array("images", 4), uploadProduct);

// export default router;



// import express from "express";
// import { uploadProduct } from "../controller/productController.js";
// // import { upload } from "../config/cloudinaryConfig.js";

// const router = express.Router();

// // Accept exactly 4 images (field name: "images")
// // router.post("/upload", upload.array("images", 4), uploadProduct);

// router.post("/upload", uploadProduct);

// export default router;




import express from "express";
import { uploadProduct, getProductsByVendor,getProductsByCategory, getAllProducts,getSingleProduct,searchProducts,getSimilarProducts ,getClothingAndFashionProducts,addReviewToProduct, getProductReviews} from "../controller/productController.js";
import { upload } from "../config/localStorageConfig.js";
// import { upload } from "../config/cloudinaryConfig.js";
import { authToken } from "../middleware/authToken.js";

const router = express.Router();

// POST route for product upload with exactly 4 images
// router.post("/upload", upload.array("images", 4), uploadProduct);

router.post(
    "/upload",
    upload.fields([
      { name: "images", maxCount: 4 },
      { name: "colorImages", maxCount: 10 }, // adjust this number as needed
    ]),
    uploadProduct
  );

router.get("/vendor/:shopName", getProductsByVendor);
router.get("/products/:category", getProductsByCategory);
router.get("/allproduct", getAllProducts);

// router.get("/productdet/:productId", getSingleProduct);
router.get('/productdet/:name', getSingleProduct)

router.get("/search/:query", searchProducts);
// router.get("/products/:productId/similar", getSimilarProducts);
router.get("/products/:productName/similar", getSimilarProducts);
// router.get("/clothing-fashion", getClothingAndFashionProducts);
router.get("/clothing-fashion", getClothingAndFashionProducts);
router.post("/productrv/:productId/review",authToken, addReviewToProduct);

// GET all reviews for a product
router.get("/productrv/:productId/reviews", getProductReviews);




export default router;
