// const express = require("express");
// const addToCartController = require("../controllers/addToCartController");
// const authMiddleware = require("../middlewares/authMiddleware"); // Ensure authentication

import express from "express";
import { addToCartController, getCartController,removeFromCartController,countCartController } from "../controller/cartController.js";
import { authToken } from "../middleware/authToken.js";
const router = express.Router();

// Route to add a product to the cart
router.post("/addtocart", authToken, addToCartController);
router.get("/countcart", authToken, countCartController)
router.get("/getcart", authToken, getCartController);
router.delete("/remove/:productId", authToken, removeFromCartController);

// module.exports = router;
export default router
