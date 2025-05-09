


import Category from "../models/catogrySchema.js";
import Product from "../models/productSchema.js"; // Import Product model
import multer from "multer";
import path from "path";

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/category/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }).single("logo");

// Add Category Controller
export const addCategory = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ message: "File upload error", error: err });

    try {
      const { name, description, parentCategory } = req.body;

      // Check if category already exists
      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ message: "Category already exists" });
      }

      // Create new category
      const newCategory = new Category({
        name,
        description,
        logo: req.file ? `/uploads/category/${req.file.filename}` : null,
        parentCategory: parentCategory || null,
      });

      await newCategory.save();
      res.status(201).json({ message: "Category added successfully", category: newCategory });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
};

// Get All Categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("parentCategory", "name");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get Single Category
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate("parentCategory", "name");
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Category
export const updateCategory = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ message: "File upload error", error: err });

    try {
      const { name, description, parentCategory } = req.body;
      const category = await Category.findById(req.params.id);
      if (!category) return res.status(404).json({ message: "Category not found" });

      category.name = name || category.name;
      category.description = description || category.description;
      category.logo = req.file ? `/uploads/category/${req.file.filename}` : category.logo;
      category.parentCategory = parentCategory || category.parentCategory;

      await category.save();
      res.status(200).json({ message: "Category updated successfully", category });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
};

// Delete Category
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
