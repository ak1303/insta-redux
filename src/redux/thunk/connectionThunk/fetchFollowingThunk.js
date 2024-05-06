import {updateFollowings} from '../../slice/connectionSlice'
import endpoints from '../../../network/endpoints'
import request from '../../../network/request'
import { apiStatus as ApiStatus } from '../../../network/apiStatus';

export  default async function fetchFollowing(dispatch) {
    try {
        dispatch(updateFollowings({ apiStatus: ApiStatus.pending }));
        const httpConfig = {
            url: endpoints.followingsList,
            method: "GET",
        }
        const { success, data } = await request(httpConfig);
        if (success) {
            dispatch(updateFollowings({ apiStatus: ApiStatus.success, users: data }));
        }
        else {
            throw new Error("Failed to fetch");
        }
    }
    catch (error) {
        alert(error.message);
        dispatch(updateFollowings({ apiStatus: ApiStatus.error }))
    }
}