import { configureStore } from "@reduxjs/toolkit";
import userSlice from './api/userAPI'

export const store = configureStore({
    reducer: {
        userSlice,
    }
})