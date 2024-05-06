import { createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../network/apiStatus";

const postSlice = createSlice({
    name: 'post',
    initialState: {apiStatus: apiStatus.init, data: [], comments:{}},
    reducers: {
        setPosts: (state, action)=>{
            state.apiStatus = action.payload.apiStatus;
            state.data = action.payload.data;
        },
        createPost: (state, action) => {
            state.data.push(action.payload);
        },
        addCommentsForPost: (state, action) => {
            const { postId, comments } = action.payload;
            state.comments[postId] = comments;
        },
    }
})

export const { setPosts, createPost, addCommentsForPost, addComment} = postSlice.actions;
export default postSlice.reducer;

/**
 *  {   apiStatus: "", 
 *      data: [
 *          {
 *              _id: postId,
 *              title: "String",
 *              likesCount: 490,
 *              commentsCount: 393,
 *              content: "String",
 *              imageUrls: [""]
 *          }
 *      ],
 *      comments: {
 *          postId: [ Comment ]
 *      },
 *
 * 
 * }
 */