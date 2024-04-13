import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
