import { configureStore } from "@reduxjs/toolkit";
import product_Slice from "./Slices/product_Slice";
export const store = configureStore({
  reducer: {
    allproduct: product_Slice,
  },
});
