import endpoints from "../../../network/endpoints"
import request from "../../../network/request";
import { apiStatus } from "../../../network/apiStatus";
import { createPost } from "../../slice/postSlice";
import { incrementPostCount } from "../../slice/userSlice";

const createPostThunk = (postData) =>{
    return async function (dispatch, getState){
        try {
            const imageUrls = postData.imageUrls.split(",").map(url => url.trim());
            const payload = {title:postData.title,content:postData.content,imageUrls:imageUrls};
            const httpConfig = {
                url : endpoints.createPost,
                method : 'POST',
                data : payload,
            }
            const {success, data} = await request(httpConfig);
            if(success){
                alert('Post created successfully');
                dispatch(createPost(data.post));
                dispatch(incrementPostCount());
            }else{
                throw new Error(data.message);
            }
        } catch (error) {
            alert(error.message);
            console.log('Error creating post')
        }
    }
}
export default createPostThunk;