import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/authenticationSlice";

const store = configureStore ({
    reducer: {
        authentication: authenticationReducer,
    },
});

export default store;