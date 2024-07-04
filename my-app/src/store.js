import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authentificationSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;