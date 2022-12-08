import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: "",
    username: "",
}

export const userTypeSlice = createSlice({
    name: "userType",
    initialState,
    reducers: {
        setUserTypeReducer: (state, action) => {
            state = action.payload;
            return state
        },
    },
});

export const { setUserTypeReducer } = userTypeSlice.actions;
export default userTypeSlice.reducer;