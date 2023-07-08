import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./Slices/favourite"

export default configureStore({
    reducer: {
        favourite:favouriteSlice
    }
})