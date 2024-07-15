import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const product_Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.product = action.payload;
    },
    filterProductReducer: (state, action) => {
      state.product = action.payload;
    },
    cartReducer: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify([...state.cart, action.payload]));
    },
  },
});

// Action creators are generated for each case reducer function
export const { productReducer, filterProductReducer, cartReducer } =
  product_Slice.actions;

export default product_Slice.reducer;
