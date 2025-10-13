import userSlice from "./slice/UserSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userSlice // this will act as a root reducer for the store 
    },
    devTools: true, // Enable Redux DevTools
});

export default store;