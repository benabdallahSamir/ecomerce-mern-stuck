import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  initialState: {},
  name: "user",
  reducers: {
    setUserState: (state, { payload }) => {
      state = Boolean(payload) ? payload : {};
      return state;
    },
  },
});

export default user.reducer;
export const { setUserState } = user.actions;
