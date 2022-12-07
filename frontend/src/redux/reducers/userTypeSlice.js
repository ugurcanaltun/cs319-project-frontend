import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: "",
    username: "",
    navbarItems: [],
    sideBarItems: []
}

export const userTypeSlice = createSlice({
    name: "userType",
    initialState,
    reducers: {
        setUserTypeReducer: (state, action) => {
            state.userType = action.payload;
        },
    },
});

export const { setUserTypeReducer } = userTypeSlice.actions;
export default userTypeSlice.reducer;