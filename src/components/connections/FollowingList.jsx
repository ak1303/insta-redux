import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { followingSelector } from "../../redux/selectors/selectors";
import fetchFollowing from "../../redux/thunk/connectionThunk/fetchFollowingThunk";
import { Spinner } from "../spinner/Spinner";
import EmptyState from './EmptyState';
import { FollowingUser as  User } from "./User";

const FollowingList = () => {
    const followingInfo = useSelector(followingSelector);
    console.log(followingInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFollowing);
    }, []);

    if (followingInfo.apiStatus === "pending" || followingInfo.apiStatus === "init") {
        return <Spinner />
    }

    const followingList = followingInfo.users;
    return <div className="users-list flex flex-col gap-2 mt-5 rounded">
        {followingList.length === 0 ? <EmptyState message="You Do Not Follow Anyone" /> :
            followingList.map(user => <User key={user._id} user={user} />)
        }
    </div>
}
export default FollowingList;