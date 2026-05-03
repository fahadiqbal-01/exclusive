import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  backupProduct: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};

export const product_Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.product = action.payload;
      if (state.backupProduct.length === 0) {
        state.backupProduct = action.payload;
      }
    },
    filterProductReducer: (state, action) => {
      state.product = action.payload;
    },
    cartReducer: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCartReducer: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateQuantityReducer: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    wishlistReducer: (state, action) => {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeWishlistReducer: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const {
  productReducer,
  filterProductReducer,
  cartReducer,
  removeCartReducer,
  updateQuantityReducer,
  wishlistReducer,
  removeWishlistReducer,
} = product_Slice.actions;

export default product_Slice.reducer;
