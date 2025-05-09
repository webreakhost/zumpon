
// import { useState } from "react";
// import "./App.css";
// import Header from './component/header/Header'

// import AppRoutes from './routes/AppRoutes'
// import { setUserDetails } from "./store/UserSlice";
// import { useDispatch } from 'react-redux';
// import Context from './context';
// function App() {

// const [user, setUser] = useState(null); 
// const dispatch = useDispatch();


// const fetchUserDetails = async () => {
//     try {
//         const response = await fetch(SummaryApi.current_user.url, {
//             method: SummaryApi.current_user.method,
//             credentials: "include",
//         });

//         const result = await response.json();

//         if (!response.ok) {
//             throw new Error(result.message || "Failed to fetch user details");
//         }

//         if (result.success) {
//             let userData = result.data;

//             // If user is a vendor, fetch vendor details
//             if (userData.role === "vendor") {
//                 const vendorResponse = await fetch(`/api/vendor/details/${userData._id}`, {
//                     method: "GET",
//                     credentials: "include",
//                 });

//                 const vendorData = await vendorResponse.json();
//                 if (vendorData.success) {
//                     userData.vendorDetails = vendorData.data;
//                 }
//             }

//             // If user is an admin, fetch total users/vendors count
//             if (userData.role === "admin") {
//                 const adminResponse = await fetch("/api/admin/stats", {
//                     method: "GET",
//                     credentials: "include",
//                 });

//                 const adminData = await adminResponse.json();
//                 if (adminData.success) {
//                     userData.totalUsers = adminData.totalUsers;
//                     userData.totalVendors = adminData.totalVendors;
//                 }
//             }

//             // Dispatch to Redux & update local state
//             dispatch(setUserDetails(userData));
//             setUser(userData);
//         }
//     } catch (error) {
//         console.error("Error fetching user details:", error.message);
//     }
// };

// useEffect(() => {
//   fetchUserDetails(); 
//   // fetchUserAddToCart(); // Fetch cart product count
// }, []);


//   return (
    
//     <Context.Provider
//     value={{       
//         user, 
//         fetchUserDetails, 
       
//     }}
//    >
//     <Context.Provider/>
    
//     <div className="">
    
//     <Header/>
//     <AppRoutes/>
//   </div>
  
     
  
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import "./App.css";
import Header from './component/header/Header';
import AppRoutes from './routes/AppRoutes';
import { setUserDetails } from "./store/UserSlice";

import { useDispatch } from 'react-redux';
// import Context from './context/Context';
import Context from './context/index';
import { BACKENDURL } from "./config/config";
import Footer from "./component/footer/Footer";
import ScrollTopButton from "./component/footer/ScrollTopButton";
import Mobmenu from "./component/mobile/Mobmenu";

function App() {
    const [user, setUser] = useState(null);
    const [cartProductCount, setCartProductCount] = useState(0);
    const dispatch = useDispatch();

    
    const fetchUserDetails = async () => {
      try {
          const response = await fetch(BACKENDURL + "/api/v1/auth/user-details", {
              method: "GET",
              credentials: "include",
          });
  
          const result = await response.json();
          if (!response.ok) throw new Error(result.message || "Failed to fetch user details");
  
          if (result.success) {
              let userData = result.data;
  
              // Fetch vendor details if user is a vendor
              if (userData.role === "vendor") {
                  const vendorResponse = await fetch(BACKENDURL + `/api/v1/auth/vendor/details/${userData._id}`, {
                      method: "GET",
                      credentials: "include",
                  });
  
                  const vendorData = await vendorResponse.json();
                  if (vendorData.success) userData.vendorDetails = vendorData.data;
              }
  
              // Fetch admin stats if user is an admin
              if (userData.role === "admin") {
                  const adminResponse = await fetch(BACKENDURL + "/api/v1/auth/admin/stats", {
                      method: "GET",
                      credentials: "include",
                  });
  
                  const adminData = await adminResponse.json();
                  if (adminData.success) {
                      userData.totalUsers = adminData.totalUsers;
                      userData.totalVendors = adminData.totalVendors;
                  }
              }
  
              dispatch(setUserDetails(userData));
              setUser(userData);
          }
      } catch (error) {
          console.error("Error fetching user details:", error.message);
      }
  };

  const fetchUserAddToCart = async () => {
    try {
        const dataResponse = await fetch(BACKENDURL + "/api/v1/cart/countcart", {
            method: "get",
            credentials: 'include',
        });

        const dataApi = await dataResponse.json();
        setCartProductCount(dataApi?.data?.count || 0);
    } catch (error) {
        console.error("Error fetching cart product count:", error);
    }
};
  
  useEffect(() => {
      fetchUserDetails();
      fetchUserAddToCart();
  }, []);
    return (
        <Context.Provider value={{ user, fetchUserDetails,cartProductCount,fetchUserAddToCart}} 
            >
            <div className="">
                <Mobmenu/>
                <Header />
                <AppRoutes />
                <ScrollTopButton/>

                <Footer/>
                 
            </div>
        </Context.Provider>
    );
}

export default App;
