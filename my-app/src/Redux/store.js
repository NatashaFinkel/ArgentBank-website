import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/authenticationSlice";
import profileReducer from "./reducers/profileSlice";

const store = configureStore ({
    reducer: {
        authentication: authenticationReducer,
        profile: profileReducer,
    },
});

export default store;