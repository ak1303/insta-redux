import {addPendingConnection, updateFollowStatusInSuggestions, removePendingConnection, updateFollowStatusInFollowing, updateFollowStatusInFollowers} from '../../slice/connectionSlice'
import endpoints from '../../../network/endpoints'
import request from '../../../network/request'

export default function updateConnection(userId, isFollowing, tabName) {
    console.log('updateConnection');
    return async function (dispatch, getState) {
        try {
            dispatch(addPendingConnection(userId));
            const httpConfig = {
                url: isFollowing ? endpoints.unfollow : endpoints.follow,
                method: "POST",
                data: {
                    userId
                }
            }
            const { success, data } = await request(httpConfig);

            if (success) {
                if(tabName === 'suggestions') {
                    dispatch(updateFollowStatusInSuggestions({ userId, status: !isFollowing }));
                }else if(tabName === 'following') {
                    dispatch(updateFollowStatusInFollowing({ userId, status: !isFollowing }));
                }else if(tabName === 'followers') {
                    dispatch(updateFollowStatusInFollowers({ userId, status: !isFollowing }));
                }
            }
        }
        catch (error) {

        }
        finally {
            dispatch(removePendingConnection(userId))
        }
    }
}