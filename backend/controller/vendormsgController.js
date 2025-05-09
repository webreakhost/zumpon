// const Message = require("../models/Message");
import Message from "../models/msgSchema.js"; // Import the Message model

export const sendVendorMessage = async (req, res) => {
  try {
    const { name, email, message, vendorShopName } = req.body;

    if (!name || !email || !message || !vendorShopName) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = new Message({
      name,
      email,
      message,
      vendorShopName,
    });

    await newMessage.save();
    res.status(200).json({ success: true, message: "Message sent to vendor." });
  } catch (error) {
    console.error("Send Message Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
