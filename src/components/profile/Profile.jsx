import UserInfo from "./UserInfo"
import Posts from "./Posts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import setUserThunk from "../../redux/thunk/userThunk/setUserThunk"
import { apiStatus as status } from "../../network/apiStatus"
import { Button } from "@mui/material"

const Profile = () => {

  const {apiStatus, data} = useSelector(state=>state.user);
  console.log(apiStatus, data)
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log('fetching profile')
    dispatch(setUserThunk);
  },[])

  const logoutUser = ()=>{
    localStorage.removeItem('token');
    window.location.reload();
  }
  if(apiStatus === status.pending || apiStatus === status.init){
    return <h1 className=" text-xl">Loading Profile...</h1>
  }
  return (
    <div className="p-4">
      <div className="h-10">
        <Button 
          sx={{backgroundColor:'#4cb5f9' , color:'#fff',float:'right', zIndex:'1' , ":hover":{backgroundColor:'lightblue', color:'black'}}}
          onClick={logoutUser}
        >
          Logout
        </Button>
      </div>
      <UserInfo user={data}/> 
      <Posts/>

    </div>
  )
}

export default Profile