
import { setUser } from "../../slice/userSlice"
import request from "../../../network/request"
import endpoints from "../../../network/endpoints"
import { apiStatus as status } from "../../../network/apiStatus"

const setUserThunk = async(dispatch, getState) =>{
    try{
        const httpCongig = {
            url: endpoints.userInfo,
            method : 'GET',
        }
        dispatch(setUser({apiStatus:status.pending}));
        const{success,data} = await request(httpCongig);
        console.log(success,data);
        if(success){
            dispatch(setUser({apiStatus: status.success, data}));
        }else{
            throw new Error(data);
        }
    }catch(err){
        dispatch(setUser({apiStatus: status.error, data:err.message}));
    }
}
export default setUserThunk;