import { useDispatch, useSelector } from "react-redux";
import LoadingButton from '@mui/lab/LoadingButton';
import { pendingConnectionSelector } from '../../redux/selectors/selectors'
import updateConnection from "../../redux/thunk/connectionThunk/updateConnectionThunk";

export const SuggestionUser = ({ user }) => {
    const dispatch = useDispatch();
    const pendingConnections = useSelector(pendingConnectionSelector)
    const isFollowing = user.following;
    console.log(isFollowing);
    // isFollowing = false 
    // single suggestion have userInfo with extra key following: true/false
    const onClickBtn = () => {
        dispatch(updateConnection(user._id, user.following,'suggestions'))
    }

    return (
        <div key={user._id} className="w-2/4 p-3 flex justify-between items-center m-auto border rounded">
            <p>{user.name}</p>
            <LoadingButton
                loading={pendingConnections[user._id]}
                onClick={onClickBtn}
                className="btn text-white py-2 px-3"
                sx={{backgroundColor:'#4cb5f9' , color:'#fff', ":hover":{backgroundColor:'lightblue', color:'black'}}}
            >{isFollowing ? "Following" : "Follow"}</LoadingButton>
        </div>
    );
}

export const FollowingUser = ({ user }) => {
    const dispatch = useDispatch();
    const pendingConnections = useSelector(pendingConnectionSelector)

    const isFollowing = user.following;
    console.log(isFollowing);
    // isFollowing = false 
    // single suggestion have userInfo with extra key following: true/false
    const onClickBtn = () => {
        dispatch(updateConnection(user._id, user.following,'following'))
    }

    return (
        <div key={user._id} className="w-2/4 p-3 flex justify-between items-center m-auto border rounded">
            <p>{user.name}</p>
            <LoadingButton
                loading={pendingConnections[user._id]}
                onClick={onClickBtn}
                className="btn text-white py-2 px-3"
                sx={{backgroundColor:'#4cb5f9' , color:'#fff', ":hover":{backgroundColor:'lightblue', color:'black'}}}
            >{isFollowing ? "Following" : "Follow"}</LoadingButton>
        </div>
    );
}

export const FollowersUser = ({ user }) => {
    const dispatch = useDispatch();
    const pendingConnections = useSelector(pendingConnectionSelector)

    const isFollowing = user.following;
    console.log(isFollowing);
    // isFollowing = false 
    // single suggestion have userInfo with extra key following: true/false
    const onClickBtn = () => {
        dispatch(updateConnection(user._id, user.following,'followers'))
    }

    return (
        <div key={user._id} className="w-2/4 p-3 flex justify-between items-center m-auto border rounded">
            <p>{user.name}</p>
            <LoadingButton
                loading={pendingConnections[user._id]}
                onClick={onClickBtn}
                className="btn text-white py-2 px-3"
                sx={{backgroundColor:'#4cb5f9' , color:'#fff', ":hover":{backgroundColor:'lightblue', color:'black'}}}
            >{isFollowing ? "Following" : "Follow Back"}</LoadingButton>
        </div>
    );
}