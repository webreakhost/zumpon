import express from "express";
import {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/add-category", addCategory);
router.get("/getall-cat", getAllCategories);
router.get("/getcatbyid:id", getCategoryById);
router.put("/updatebyid:id", updateCategory);
router.delete("/delete:id", deleteCategory);

export default router;
