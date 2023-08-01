import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "~/pages/Cart/cartSlice";
import userSlice from "~/pages/Login/userSlice";

export const store = configureStore({
  reducer: {
    carts: cartSlice,
    user: userSlice.reducer,
  },
});
