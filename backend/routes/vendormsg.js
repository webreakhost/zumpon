// const express = require("express");
import express from "express";
const router = express.Router();
// const { sendVendorMessage } = require("../controllers/vendorMessageController");
import { sendVendorMessage } from "../controller/vendormsgController.js"; // Import the controller function

router.post("/send-message", sendVendorMessage);


export default router;
