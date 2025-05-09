





// import React, { useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../config/config";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "customer",
//     phoneNumber: "",
//     shopName: "",
//     shopUrl: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.post(BACKENDURL + "/api/v1/auth/register", formData);
//       setSuccess(response.data.message);
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-6">
//       <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
//         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
//         {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             onChange={handleChange}
//             required
//           />

//           <select
//             name="role"
//             className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             onChange={handleChange}
//           >
//             <option value="customer">Customer</option>
//             <option value="vendor">Vendor</option>
//           </select>

//           {formData.role === "vendor" && (
//             <>
//               <input
//                 type="text"
//                 name="shopName"
//                 placeholder="Shop Name"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 onChange={handleChange}
//                 required={formData.role === "vendor"}
//               />
//               <input
//                 type="text"
//                 name="shopUrl"
//                 placeholder="Shop URL"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 onChange={handleChange}
//                 required={formData.role === "vendor"}
//               />
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../config/config";
// import { useNavigate } from "react-router-dom";

// import { Navigate } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "customer",
//     phoneNumber: "",
//     shopName: "",
//     shopUrl: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.post(BACKENDURL + "/api/v1/auth/register", formData);
//       setSuccess(response.data.message);
//       navigate("/login"); // Redirect to login page after successful signup
      
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-50 to-indigo-00 p-6">
//       <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in">
//         <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">Create an Account</h2>

//         {error && (
//           <p className="text-red-600 bg-red-100 border border-red-300 rounded-lg px-4 py-2 text-sm text-center mb-4 animate-pulse">
//             {error}
//           </p>
//         )}
//         {success && (
//           <p className="text-green-600 bg-green-100 border border-green-300 rounded-lg px-4 py-2 text-sm text-center mb-4 animate-pulse">
//             {success}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="relative">
//             <select
//               name="role"
//               className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
//               onChange={handleChange}
//             >
//               <option value="customer">Customer</option>
//               <option value="vendor">Vendor</option>
//             </select>
//           </div>

//           {formData.role === "vendor" && (
//             <>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="shopName"
//                   placeholder="Shop Name"
//                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="shopUrl"
//                   placeholder="Shop URL"
//                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold p-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Sign Up
//           </button>
          
//         <p className="text-center text-gray-600 mt-4">
//   Already have an account?{" "}
//   <a href="/login" className="text-blue-500 hover:underline">Log in here</a>
// </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../config/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    phoneNumber: "",
    shopName: "",
    shopUrl: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${BACKENDURL}/api/v1/auth/register`, formData);
      setSuccess("Registration successful! Check your email for confirmation.");
      
      // Delay redirection so user sees the success message
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-50 to-indigo-00 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">Create an Account</h2>

        {error && (
          <p className="text-red-600 bg-red-100 border border-red-300 rounded-lg px-4 py-2 text-sm text-center mb-4 animate-pulse">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 bg-green-100 border border-green-300 rounded-lg px-4 py-2 text-sm text-center mb-4 animate-fade-in">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <select
              name="role"
              className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
              onChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          {formData.role === "vendor" && (
            <>
              <div className="relative">
                <input
                  type="text"
                  name="shopName"
                  placeholder="Shop Name"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="shopUrl"
                  placeholder="Shop URL"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow-md"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold p-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">Log in here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
