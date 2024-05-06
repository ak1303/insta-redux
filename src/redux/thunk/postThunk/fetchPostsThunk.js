import { apiStatus } from "../../../network/apiStatus"
import endpoints from "../../../network/endpoints"
import request from "../../../network/request"
import { setPosts } from "../../slice/postSlice"


const fetchPosts = async(dispatch, getState) =>{
    try {
        const httpConfig ={
            url: endpoints.postsList,
            method : 'GET',
        }
        dispatch(setPosts({ apiStatus: "pending" }))
        const {success, data} = await request(httpConfig);
        if(success){
            dispatch(setPosts({ apiStatus: apiStatus.success, data }));
        }else{
            throw new Error(data.message);
        }
    } catch (error) {
        console.log(error)
        alert('Error occered in fetching posts, '+error.message);
        dispatch(setPosts({ apiStatus: apiStatus.error}));
    }
}
export default fetchPosts;