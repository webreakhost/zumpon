import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    vendorDetails: null, // Stores vendor-specific data
    adminStats: null, // Stores admin-related stats
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload;

            // Store vendor details if user is a vendor
            if (action.payload?.role === "vendor") {
                state.vendorDetails = action.payload.vendorDetails || null;
            } else {
                state.vendorDetails = null;
            }

            // Store admin statistics if user is an admin
            if (action.payload?.role === "admin") {
                state.adminStats = {
                    totalUsers: action.payload.totalUsers || 0,
                    totalVendors: action.payload.totalVendors || 0,
                };
            } else {
                state.adminStats = null;
            }
        },
        clearUser: (state) => {
            state.user = null;
            state.vendorDetails = null;
            state.adminStats = null;
        },
    },
});

// Action creators
export const { setUserDetails, clearUser } = userSlice.actions;

export default userSlice.reducer;
