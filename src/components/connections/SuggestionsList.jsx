import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { suggestionsSelector } from "../../redux/selectors/selectors";
import fetchSuggestions from "../../redux/thunk/connectionThunk/fetchSuggestionsThunk";
import { Spinner } from "../spinner/Spinner";
import EmptyState from './EmptyState';
import { SuggestionUser as User } from "./User";

const SuggestionsList = () => {
    const suggestionsInfo = useSelector(suggestionsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSuggestions);
    }, []);

    if (suggestionsInfo.apiStatus === "pending" || suggestionsInfo.apiStatus === "init") {
        return <Spinner />
    }

    const suggestions = suggestionsInfo.users;

    return <div className="users-list flex flex-col gap-2 mt-5 rounded">
        {suggestions.length === 0 ? <EmptyState message="No suggestions for you" /> :
            suggestions.map(user => <User key={user._id} user={user} />)
        }
    </div>
}
export default SuggestionsList;