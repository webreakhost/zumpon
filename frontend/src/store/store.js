

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// export const store = configureStore({
//     reducer: {
//         user: userReducer, // Manages user, vendor, and admin state
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false, // Allows storing non-serializable data if needed
//         }),
// });

// export default store;



import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

export const store = configureStore({
    reducer: {
        user: userReducer, // Manages user, vendor, and admin state
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Allows storing non-serializable data if needed
        }),
});

export default store;
