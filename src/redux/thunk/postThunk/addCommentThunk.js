import endpoints from "../../../network/endpoints"
import request from "../../../network/request"
import { addComment } from "../../slice/postSlice"


const addCommentForPost = async (postId, message) => { 
        const httpConfig = {
            url : endpoints.comment,
            method : 'POST',
            data : {message},
            params : {postId : postId}
        }
        const {success, data} = await request(httpConfig);
        if(success) {
        console.log('added comment to db',data)
        }else{
            alert('Error Occured, try again!');
        }
}
export default addCommentForPost;