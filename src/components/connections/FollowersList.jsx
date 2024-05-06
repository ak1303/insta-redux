import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "../spinner/Spinner";
import { followersSelector } from "../../redux/selectors/selectors";
import fetchFollowers from "../../redux/thunk/connectionThunk/fetchFollowersThunk";
import EmptyState from './EmptyState';
import { FollowersUser as User } from "./User";

const FollowersList = () => {
    const followersInfo = useSelector(followersSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFollowers)
    }, []);

    if (followersInfo.apiStatus === "pending" || followersInfo.apiStatus === "init") {
        return <Spinner />
    }

    const users = followersInfo.users;

    return (
        <div className="users-list flex flex-col gap-2 mt-5 rounded">
            {
                users.length === 0 ? <EmptyState message="No followers found" /> :
                    users.map(user => {
                        return (<User key={user._id} user={user} />)
                    })
            }
        </div>
    );
}
export default FollowersList;