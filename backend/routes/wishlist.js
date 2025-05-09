import express from "express";

import { addToWishlistController,getWishlistController,removeFromWishlistController } from "../controller/wishlistController.js";
// import { removeFromWishlist } from "../controller/wishlistController.js";
import { authToken } from "../middleware/authToken.js";

const router = express.Router();

router.post("/addtowish",authToken, addToWishlistController);

router.get("/viewwish",authToken, getWishlistController);
// router.delete("/remove/:productId", authToken, removeFromWishlistController);
router.delete('/remove/:productId', authToken, removeFromWishlistController);


export default router;