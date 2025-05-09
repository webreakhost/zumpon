
import userModel from "../models/userSchema.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import VendorModel from "../models/vendorSchema.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv"
import crypto from "crypto";





dotenv.config(); // Load environment variables

export const userSignUpController = async (req, res) => {
  try {
    const { email, password, name, role, shopName, shopUrl, phoneNumber } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
        error: true,
        success: false
      });
    }

    // Validate required fields
    if (!email || !password || !name || !role) {
      return res.status(400).json({
        message: "Please provide all required fields.",
        error: true,
        success: false
      });
    }

    // Additional validation for vendors
    if (role === "vendor" && (!shopName || !shopUrl || !phoneNumber)) {
      return res.status(400).json({
        message: "Vendors must provide shopName, shopUrl, and phoneNumber.",
        error: true,
        success: false
      });
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role: role.toLowerCase(),
      phoneNumber: role === "vendor" ? phoneNumber : null,
      shopName: role === "vendor" ? shopName : null,
      shopUrl: role === "vendor" ? shopUrl : null,
    });

    // Save user in database
    await newUser.save();

    // Send email with user ID and name
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: newUser.email,
    //   subject: "Welcome to Zumpon!",
    //   html: `
    //     <h2>Hello ${newUser.name},</h2>
    //     <p>Thank you for registering on Zumpon!</p>
    //     <p><strong>Your User ID:</strong> ${newUser._id}</p>
    //     <p>We’re excited to have you on board.</p>
    //     <br/>
    //     <p>Best regards,<br/>The Zumpon Team</p>
    //   `,
    // };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: newUser.email,
      subject: "Welcome to Zumpon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <div style="background-color: #4CAF50; padding: 15px; border-radius: 8px 8px 0 0; color: white; text-align: center;">
            <h1 style="margin: 0;">Zumpon</h1>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <h2 style="color: #333;">Hello ${newUser.name},</h2>
            <p style="font-size: 16px; color: #555;">Thank you for registering on <strong>Zumpon</strong>!</p>
            <p style="font-size: 16px; color: #555;"><strong>Your User ID:</strong> <span style="color: #333;">${newUser._id}</span></p>
            <p style="font-size: 16px; color: #555;">We’re excited to have you on board.</p>
            <br/>
            <p style="font-size: 16px; color: #555;">Best regards,<br/><strong>The Zumpon Team</strong></p>
          </div>
          <div style="background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #777; border-radius: 0 0 8px 8px;">
            &copy; ${new Date().getFullYear()} Zumpon. All rights reserved.
          </div>
        </div>
      `
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({
      message: "User registered successfully!",
      success: true,
      error: false
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal Server Error",
      error: true,
      success: false
    });
  }
};

// export const userSignUpController = async (req, res) => {
//     try {
//         const { email, password, name, role, shopName, profilePic, shopUrl, phoneNumber } = req.body;

//         // Check if user already exists
//         const existingUser = await userModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({
//                 message: "User already exists.",
//                 error: true,
//                 success: false
//             });
//         }

//         // Validate required fields
//         if (!email || !password || !name || !role) {
//             return res.status(400).json({
//                 message: "Please provide all required fields.",
//                 error: true,
//                 success: false
//             });
//         }

//         // Additional validation for vendors
//         if (role === "vendor" && (!shopName || !shopUrl || !phoneNumber)) {
//             return res.status(400).json({
//                 message: "Vendors must provide shopName, shopUrl, and phoneNumber.",
//                 error: true,
//                 success: false
//             });
//         }

//         // Hash password
//         const salt = bcrypt.genSaltSync(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create new user
//         const newUser = new userModel({
//             name,
//             email,
//             password: hashedPassword,
//             role: role.toLowerCase(),
//             phoneNumber: role === "vendor" ? phoneNumber : null,
//             shopName: role === "vendor" ? shopName : null,
//             shopUrl: role === "vendor" ? shopUrl : null,
//         });

//         // Save user in database
//         await newUser.save();

//         res.status(201).json({
//             message: "User registered successfully!",
//             success: true,
//             error: false
//         });

//     } catch (err) {
//         res.status(500).json({
//             message: err.message || "Internal Server Error",
//             error: true,
//             success: false
//         });
//     }
// };

// User Login
export const usersignin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide both email and password.",
                error: true,
                success: false
            });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                error: true,
                success: false
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Incorrect password.",
                error: true,
                success: false
            });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, process.env.TOKEN_SECRET_KEY, {
            expiresIn: "8h"
        });

        // Cookie options
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        };

        res.cookie("token", token, cookieOptions).status(200).json({
            message: "Login successful.",
            success: true,
            error: false,
            data: {
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    shopName: user.role === "vendor" ? user.shopName : null,
                    shopUrl: user.role === "vendor" ? user.shopUrl : null
                },
            },
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
};





export const userDetailsController = async (req, res) => {
    try {
        // console.log("Fetching user details for userId:", req.userId);

        if (!req.userId) {
            return res.status(400).json({
                message: "Invalid request: No user ID found.",
                error: true,
                success: false
            });
        }

        // Fetch user details
        const user = await userModel.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        let userData = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt
        };

        if (user.role === "vendor") {
            const vendorDetails = await VendorModel.findOne({ userId: user._id });
            userData.vendorDetails = vendorDetails || {};
        }

        if (user.role === "admin") {
            const totalUsers = await userModel.countDocuments();
            const totalVendors = await userModel.countDocuments({ role: "vendor" });
            userData.totalUsers = totalUsers;
            userData.totalVendors = totalVendors;
        }

        res.status(200).json({
            data: userData,
            error: false,
            success: true,
            message: "User details retrieved successfully"
        });

        // console.log("User details:", userData);

    } catch (err) {
        console.error("Error fetching user details:", err);
        res.status(500).json({
            message: "Internal Server Error",
            error: true,
            success: false
        });
    }
};

export const getAdminStatsController = async (req, res) => {
    try {
        const totalUsers = await userModel.countDocuments();
        const totalVendors = await userModel.countDocuments({ role: "vendor" });
        res.status(200).json({ success: true, totalUsers, totalVendors });
    } catch (err) {
        console.error("Error fetching admin stats:", err);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};



export const getVendorDetails = async (req, res) => {
  try {
    const { userId } = req.params;

    const vendor = await VendorModel.findOne({ userId }).populate("products");

    if (!vendor) {
      return res.status(404).json({
        message: "Vendor not found",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      data: vendor,
      error: false,
      success: true,
      message: "Vendor details retrieved successfully",
    });
  } catch (err) {
    console.error("Error fetching vendor details:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

export const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await userModel.find({}, "-password"); // Exclude passwords for security

        if (!users || users.length === 0) {
            return res.status(404).json({
                message: "No users found.",
                success: false,
                error: true
            });
        }

        res.status(200).json({
            message: "Users fetched successfully.",
            success: true,
            error: false,
            users
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
};




// import userModel from "../models/userModel.js";

export const updateUserRole = async (req, res) => {
    try {
        const { userId } = req.params; // Get user ID from request params
        const { newRole } = req.body; // Get new role from request body

        // Validate input
        if (!userId || !newRole) {
            return res.status(400).json({ success: false, message: "User ID and new role are required" });
        }

        // Check if the user exists
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update only the role field, and avoid required validation errors
        user.role = newRole.toLowerCase(); // Ensure role is stored in lowercase

        // Save without validating required fields like phoneNumber
        await user.save({ validateBeforeSave: false });

        return res.status(200).json({ success: true, message: "User role updated successfully", user });
    } catch (error) {
        console.error("Error updating user role:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const saltRounds = 10;

dotenv.config();
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Your email
    pass: process.env.EMAIL_PASS,  // Your app password
  },
});

// 🔹 Forgot Password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate a reset token (valid for 1 hour)
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    const resetLink = `${process.env.CLIENT_SITE_URL}reset-password/${resetToken}`;

    await transporter.sendMail({
      from: `"Support Team" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Password Reset Request",
      html: `<p>You requested a password reset.</p>
             <p>Click the link below to reset your password:</p>
             <a href="${resetLink}">${resetLink}</a>
             <p>This link is valid for 1 hour.</p>`,
    });

    res.status(200).json({ message: "Reset link sent to email" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// 🔹 Reset Password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ error: "Token and new password are required" });
  }

  try {
    const user = await userModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Hash the new password
    user.password = await bcrypt.hash(newPassword, saltRounds);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// export const updateUserRole = async (req, res) => {
//     try {
//         const { userId } = req.params;  // Get user ID from request params
//         const { newRole } = req.body;  // Get new role from request body

//         // Validate input
//         if (!userId || !newRole) {
//             return res.status(400).json({ success: false, message: "User ID and new role are required" });
//         }

//         // Check if the user exists
//         const user = await userModel.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         // Update user role
//         user.role = newRole.toLowerCase();  // Ensure role is stored in lowercase
//         await user.save();

//         return res.status(200).json({ success: true, message: "User role updated successfully", user });
//     } catch (error) {
//         console.error("Error updating user role:", error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };