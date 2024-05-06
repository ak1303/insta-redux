import { createSlice } from "@reduxjs/toolkit";
import {apiStatus as ApiStatus} from '../../network/apiStatus';

// this handles all the data related connections 
// followers, following and suggestions
const connectionsSlice = createSlice({
    name: "connections",
    initialState: {
        followers: {
            apiStatus: ApiStatus.init,
            users: []
        },
        following: {
            apiStatus: ApiStatus.init,
            users: []
        },
        suggestions: {
            apiStatus: ApiStatus.init,
            users: []
        },
        pendingConnections: {}
        // { 100: true, 102: true, 104: true } => {userId:true, }
    },
    reducers: {
        updateFollowers: (state, action) => {
            state.followers = action.payload
        },
        updateFollowings: (state, action) => {
            state.following = action.payload
        },
        updateSuggestions: (state, action) => {
            state.suggestions = action.payload;
        },
        addPendingConnection: (state, action) => {
            state.pendingConnections[action.payload] = true;
        },
        removePendingConnection: (state, action) => {
            delete state.pendingConnections[action.payload];
        },
        updateFollowStatusInSuggestions: (state, action) => {
            // action = {payload: { userId: "" , status: true | false } }
            const targetUser = state.suggestions.users?.find(u => u._id === action.payload.userId);
            targetUser.following = action.payload.status; //change following status for perticular user in suggestions
        },
        updateFollowStatusInFollowing: (state, action) => {
            // action = {payload: { userId: "" , status: true | false } }
            const targetUser = state.following.users?.find(u => u._id === action.payload.userId);
            targetUser.following = action.payload.status; //change following status for perticular user in suggestions
        },
        updateFollowStatusInFollowers: (state, action) => {
            // action = {payload: { userId: "" , status: true | false } }
            const targetUser = state.followers.users?.find(u => u._id === action.payload.userId);
            targetUser.following = action.payload.status; //change following status for perticular user in suggestions
        },
    },
});

export const { 
    updateFollowStatusInSuggestions, 
    updateFollowers, 
    updateSuggestions, 
    addPendingConnection, 
    removePendingConnection,
    updateFollowings,
    updateFollowStatusInFollowing,
    updateFollowStatusInFollowers,
} = connectionsSlice.actions;
export default connectionsSlice.reducer;
