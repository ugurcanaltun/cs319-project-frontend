import { configureStore } from "@reduxjs/toolkit";
import userTypeReducer from "./reducers/userTypeSlice";

export const store = configureStore({
    reducer: {
        userType: userTypeReducer,
    }
});