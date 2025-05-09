




import React, { useState,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../config/config";
import Context from '../context';
import { toast } from 'react-toastify';
import DynamicHead from "../component/DynamicHead";


const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const dataResponse = await fetch(BACKENDURL + "/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const dataApi = await dataResponse.json();
      console.log("API Response:", dataApi); // Debugging
  
      if (dataApi.success) {
        toast.success(dataApi.message);
        localStorage.setItem("user", JSON.stringify(dataApi.user)); // Save user data
        navigate("/");
        fetchUserDetails();
      } else {
        toast.error(dataApi.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleForgotPassword = async () => {
    if (!data.email) {
      toast.error("Please enter your email");
      return;
    }
  
    try {
      const response = await fetch(`${BACKENDURL}/api/v1/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
  
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.error || "Something went wrong");
        return;
      }
  
      toast.success("Password reset link sent to your email");
    } catch (error) {
      console.error("Forgot Password error:", error);
      toast.error("Something went wrong. Try again.");
    }
  };
  

  

  return (
    <>
    <DynamicHead
        title="Login - Zumpon"
        description="Access your Zumpon account to view orders, manage your profile, and enjoy personalized shopping experiences."
        keywords="Zumpon Login, Sign In, User Account, E-commerce Login"
        image="https://zumpon.com/images/login-banner.png"
        url="https://zumpon.com/login"
        author="Zumpon Team"
      />
       <main className="main login-page">
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>My account</li>
          </ul>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="login-popup">
            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
              <ul className="nav nav-tabs text-uppercase" role="tablist">
                <li className="nav-item">
                  <a href="#sign-in" className="nav-link active">
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="nav-link">
                    Sign Up
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="sign-in">
                  {message && <p className="text-center text-red-500">{message}</p>}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Username or email address *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={data.email}
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-0">
                      <label>Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={data.password}
                        // name='password' 
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                    <div className="form-checkbox d-flex align-items-center justify-content-between">
                      <input type="checkbox" className="custom-checkbox" id="remember1" name="remember1" />
                      <label htmlFor="remember1">Remember me</label>
                      {/* <a href="#">Lost your password?</a> */}
                      <a onClick={handleForgotPassword} className="text-primary fw-medium">
                      Forget Password?
                    </a>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? "Signing in..." : "Sign In"}
                    </button>
                  </form>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>

              <p className="text-center">Sign in with social account</p>
              <div className="social-icons social-icon-border-color d-flex justify-content-center">
                {["facebook", "twitter", "google"].map((platform, index) => (
                  <a key={index} href="#" className={`social-icon social-${platform} w-icon-${platform}`}></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
   
  );
};

export default Login;


