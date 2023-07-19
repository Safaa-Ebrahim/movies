import { configureStore } from "@reduxjs/toolkit";

// components
import favouriteSlice from "./Slices/favourite"
import toastSlice from "./Slices/toastSlice";

export default configureStore({
    reducer: {
        favourite:favouriteSlice,
        toastInfo: toastSlice,
    }
})