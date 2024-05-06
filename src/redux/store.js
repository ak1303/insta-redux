import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import postSlice from "./slice/postSlice";
import connectionSlice from "./slice/connectionSlice";
configureStore

const store = configureStore({
    reducer: {
        user:userSlice,
        posts:postSlice,
        connections:connectionSlice
    },
});
export default store;
