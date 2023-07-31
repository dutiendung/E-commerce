import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "~/pages/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
  },
});
