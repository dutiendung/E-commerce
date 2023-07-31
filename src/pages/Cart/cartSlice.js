import { createSlice } from "@reduxjs/toolkit";
export const cart = createSlice({
  name: "carts",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.findIndex((x) => x.id === product.id);
      if (index >= 0) {
        state[index].quantity += 1;
      } else {
        product.quantity = 1;
        state.push(product);
      }
    },
    decrementAnItem: (state, action) => {
      const product = action.payload;
      const delItem = state.find((x) => x.id === product.id);
      if (delItem.quantity === 1) {
        return state.filter((x) => x.id !== delItem.id);
      } else {
        delItem.quantity -= 1;
      }
    },
  },
});
const { reducer, actions } = cart;
export const { addToCart, decrementAnItem } = actions;
export default reducer;
