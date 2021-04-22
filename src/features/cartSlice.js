import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const cartItem = action.payload;
      const newState = [...state, cartItem];
      return newState;
    },
    removeItem: (state, action) => {
      const newState = [...action.payload];
      return newState;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
