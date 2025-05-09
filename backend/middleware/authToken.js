// import User from "../models/userSchema.js"
// import jwt from "jsonwebtoken"

// export const authToken=(req, res, next)=> {
//     try {
//         const token = req.cookies?.token || req.headers['authorization']?.split(" ")[1]; // Support both cookies & headers

//         if (!token) {
//             return res.status(401).json({
//                 message: "Please login to access this resource!",
//                 error: true,
//                 success: false
//             });
//         }

//         jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
//             if (err) {
//                 return res.status(403).json({
//                     message: "Invalid or expired token",
//                     error: true,
//                     success: false
//                 });
//             }

//             // Fetch user details from DB
//             const user = await User.findById(decoded?._id).select('-password'); // Exclude password
//             if (!user) {
//                 return res.status(404).json({
//                     message: "User not found",
//                     error: true,
//                     success: false
//                 });
//             }

//             req.userId = user._id;
//             req.userRole = user.role; // Attach role for authorization checks
//             req.user = user; // Attach full user object if needed

//             next();
//         });

//     } catch (err) {
//         res.status(500).json({
//             message: err.message || "Internal Server Error",
//             error: true,
//             success: false
//         });
//     }
// }

// module.exports = authToken;


// export const authToken = (req, res, next) => {
//     try {
//         const token = req.cookies?.token || req.headers['authorization']?.split(" ")[1];

//         console.log("Received Token:", token); // Debug log

//         if (!token) {
//             return res.status(401).json({
//                 message: "Please login to access this resource!",
//                 error: true,
//                 success: false
//             });
//         }

//         jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
//             if (err) {
//                 console.log("Token verification error:", err.message);
//                 return res.status(403).json({
//                     message: "Invalid or expired token",
//                     error: true,
//                     success: false
//                 });
//             }

//             const user = await User.findById(decoded?._id).select('-password');
//             if (!user) {
//                 return res.status(404).json({
//                     message: "User not found",
//                     error: true,
//                     success: false
//                 });
//             }

//             req.userId = user._id;
//             req.userRole = user.role;
//             req.user = user;
//             next();
//         });

//     } catch (err) {
//         res.status(500).json({
//             message: err.message || "Internal Server Error",
//             error: true,
//             success: false
//         });
//     }
// };




// import User from "../models/userSchema.js";
// import jwt from "jsonwebtoken";

// export const authToken = (req, res, next) => {
//     try {
//         // Get token from cookies or Authorization header
//         const token = req.cookies?.token || req.headers['authorization']?.split(" ")[1];

//         console.log("Received Token:", token); // Debugging log

//         if (!token) {
//             return res.status(401).json({
//                 message: "Unauthorized: No token provided.",
//                 error: true,
//                 success: false
//             });
//         }

//         jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
//             if (err) {
//                 return res.status(403).json({
//                     message: "Invalid or expired token",
//                     error: true,
//                     success: false
//                 });
//             }

//             // Find user in database
//             const user = await User.findById(decoded?._id).select('-password');
//             if (!user) {
//                 return res.status(404).json({
//                     message: "User not found",
//                     error: true,
//                     success: false
//                 });
//             }

//             req.user = user; // Attach user to request
//             next();
//         });

//     } catch (err) {
//         res.status(500).json({
//             message: "Internal Server Error",
//             error: true,
//             success: false
//         });
//     }
// };


import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const authToken = async (req, res, next) => {
    try {
        let token = req.cookies?.token;

        if (!token && req.headers.authorization) {
            const authHeaderParts = req.headers.authorization.split(" ");
            if (authHeaderParts.length === 2 && authHeaderParts[0] === "Bearer") {
                token = authHeaderParts[1];
            }
        }

        console.log("Received Token:", token);

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: No token provided.",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    message: "Invalid or expired token",
                    error: true,
                    success: false
                });
            }

            const user = await User.findById(decoded?._id).select('-password');
            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                    error: true,
                    success: false
                });
            }

            req.user = user;  // Attach full user object
            req.userId = user._id;  // Explicitly attach userId for controllers

            next();
        });

    } catch (err) {
        console.error("Auth Middleware Error:", err);
        res.status(500).json({
            message: "Internal Server Error",
            error: true,
            success: false
        });
    }
};
