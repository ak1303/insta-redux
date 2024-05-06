import endpoints from "../../../network/endpoints";
import request from "../../../network/request";
import { addCommentsForPost } from "../../slice/postSlice";

const fetchComments = (postId) =>{
    return async function(dispatch, getState) {
        try {
            const httpConfig = {
                url: endpoints.commentsList,
                method: "GET",
                params: { postId: postId }
            }
            const { success, data } = await request(httpConfig);
            console.log('comments',data);
            if (success) {
                dispatch(addCommentsForPost({ postId: postId, comments: data.comments }))
            }
        }
        catch (error) {
            alert("Failed to fetch comments" + error.message);
        }
    }  
}
export default fetchComments;