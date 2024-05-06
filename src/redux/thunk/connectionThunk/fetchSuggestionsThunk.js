import {updateSuggestions} from '../../slice/connectionSlice'
import endpoints from '../../../network/endpoints'
import request from '../../../network/request'
import { apiStatus as ApiStatus } from '../../../network/apiStatus';

async function fetchSuggestions(dispatch) {
    try {
        dispatch(updateSuggestions({ apiStatus: ApiStatus.pending }));
        const httpConfig = {
            url: endpoints.suggestionsList,
            method: "GET",
        }
        const { success, data } = await request(httpConfig);
        if (success) {
            dispatch(updateSuggestions({ apiStatus: ApiStatus.success, users: data.suggestions }));
        }
        else {
            throw new Error("Failed to fetch");
        }
    }
    catch (error) {
        alert(error.message);
        dispatch(updateSuggestions({ apiStatus: ApiStatus.error }))
    }
}
export default fetchSuggestions;