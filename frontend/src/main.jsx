

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ToastContainer />
    
      
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
   
//   </React.StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux"; // Redux Provider
import { store } from "./store/store"; // Import Redux store
import { BrowserRouter } from "react-router-dom"; // Import Router
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
        {/* <App /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
