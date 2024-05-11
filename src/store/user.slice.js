import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  theme: "dark", // Set initial theme here
  token: "",
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUserDetails: () => initialState,
    updateSelectedTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { reducer: userReducer, actions } = userSlice;
export const { updateUserDetails, updateSelectedTheme } = actions;
