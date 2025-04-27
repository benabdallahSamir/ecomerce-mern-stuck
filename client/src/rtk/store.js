import { configureStore } from "@reduxjs/toolkit";
import isLoggedIn from "./isLogedIn.js";


export default configureStore({
  reducer: {
    isLoggedIn,
  },
});
