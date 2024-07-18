import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./reducers/authenticationSlice.js";

const store = configureStore({
  reducer: {
    auth: authenticationSlice,
  },
});

export default store;