import {updateFollowers} from '../../slice/connectionSlice'
import endpoints from '../../../network/endpoints'
import request from '../../../network/request'
import { apiStatus as ApiStatus } from '../../../network/apiStatus';

export  default async function fetchFollowers(dispatch) {
    try {
        dispatch(updateFollowers({ apiStatus: ApiStatus.pending }));
        const httpConfig = {
            url: endpoints.followersList,
            method: "GET",
        }
        const { success, data } = await request(httpConfig);
        if (success) {
            dispatch(updateFollowers({ apiStatus: ApiStatus.success, users: data }));
        }
        else {
            throw new Error("Failed to fetch");
        }
    }
    catch (error) {
        alert(error.message);
        dispatch(updateFollowers({ apiStatus: ApiStatus.error }))
    }
}