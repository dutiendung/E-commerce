import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "~/services/userService";

export const getMe = createAsyncThunk("user/getUser", async () => {
  const currentUser = await usersService.getMe();
  return currentUser;
});

const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(
    localStorage.getItem("firebaseRememberAccountNotGG")
  ) || {
    current: {},
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.current = { ...action.payload };
    },
    logout: (state) => {
      state.isLogin = false;
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, { payload }) => {
      state.isLogin = true;
      state.current = payload;
    });

    builder.addCase(getMe.rejected, (state, { payload }) => {
      state.isLogin = false;
      state.current = {};
    });
  },
});
const { actions, reducer } = userSlice;
export const { logout, login } = actions;
export default reducer;
