import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = createSlice({
  initialState: false,
  name: "isLoggedIn",
  reducers: {
    setLogedInState: (state, { payload }) => {
      const value = Boolean(payload);
      state = value;
      return state;
    },
  },
});

export default isLoggedIn.reducer;
export const { setLogedInState } = isLoggedIn.actions;
