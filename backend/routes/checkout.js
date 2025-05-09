// import express from "express";
// import { placeOrder, getVendorOrders } from "../controller/checkoutController.js";
// import { authToken } from "../middleware/authToken.js";

// const router = express.Router();

// router.post("/checkout", authToken, placeOrder);
// router.get("/getordetven/:vendorId", getVendorOrders)

// export default router;




import express from "express";
import { placeOrder, getVendorOrders, getUserOrders, updateOrderStatus, cancelOrder,getAllOrdersForAdmin, placePaidOrder } from "../controller/checkoutController.js";
import { authToken } from "../middleware/authToken.js";

const router = express.Router();

router.post("/checkout", authToken, placeOrder);
router.post("/checkoutonline", authToken, placePaidOrder);
router.get("/getvendororders/:vendorId", getVendorOrders);
router.get("/orders/:userId", getUserOrders);
// router.put("/update-status", updateOrderStatus);
router.put("/update-status/:orderId", updateOrderStatus);
router.put("/cancel-order/:orderId", cancelOrder);
router.get("/admin/orders", getAllOrdersForAdmin);

export default router;
