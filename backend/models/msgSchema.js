// const mongoose = require("mongoose");
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  vendorShopName: String,
  sentAt: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = mongoose.model("Message", messageSchema);
export default mongoose.model("Message", messageSchema);