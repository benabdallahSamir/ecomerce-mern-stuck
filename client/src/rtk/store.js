import { configureStore } from "@reduxjs/toolkit";
import isLoggedIn from "./isLogedIn.js";
import user from "./user.js";

export default configureStore({
  reducer: {
    isLoggedIn,
    user,
  },
});
