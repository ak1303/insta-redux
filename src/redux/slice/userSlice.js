import { createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../network/apiStatus";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        apiStatus: apiStatus.init,
        data: null
    },
    reducers: {
        setUser: (state, action) => {
            state.apiStatus = action.payload.apiStatus,
            state.data = action.payload.data
        },
        incrementPostCount : (state, action) =>{
            console.log('post incremented')
            state.data.posts += 1;
        }
    }
})

export const {setUser, incrementPostCount} = userSlice.actions;
export default userSlice.reducer;