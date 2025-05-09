




import multer from "multer";
import path from "path";
import fs from "fs";

// Define the absolute upload path on disk
const uploadPath = path.join(process.cwd(), "public", "uploads", "product");

// Ensure the directory exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;
    file.publicUrl = `/uploads/product/${filename}`; // 💡 Save public path on file object
    cb(null, filename);
  },
});

const upload = multer({ storage });

export { upload };




// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Define the absolute upload path on disk
// const uploadPath = path.join(process.cwd(), "public", "uploads", "product");

// // Ensure the directory exists
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadPath);
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const filename = Date.now() + ext;
//     file.publicUrl = `/uploads/product/${filename}`; // 💡 Save public path on file object
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage });

// export { upload };
