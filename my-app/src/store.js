import { configureStore } from "@reduxjs/toolkit";
import authentificationSlice from "./reducers/authentificationSlice.js";

const store = configureStore({
  reducer: {
    auth: authentificationSlice,
  },
});

export default store;