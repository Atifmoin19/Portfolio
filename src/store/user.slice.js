import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  theme: "light", // Set initial theme here
  token: "",
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUserDetails: (state, action) => {
      state.userId = action.payload?.userId;
      state.token = action.payload?.userId + action.payload?.password;
    },
    resertUserDetails: (state) => {
      state.userId = initialState.userId;
      state.token = initialState.token;
    },
    updateSelectedTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { reducer: userReducer, actions } = userSlice;
export const { updateUserDetails, updateSelectedTheme, resertUserDetails } =
  actions;
