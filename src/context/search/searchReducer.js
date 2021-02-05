import { CLEAR_SEARCH_VALUE, SEARCH_MOVIES, SEARCH_VALUE, TOGGLE_LOADER} from "../types/types"


export const SearchReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_MOVIES: return {
            ...state, 
            searchResults: action.data
        }
        case SEARCH_VALUE: return {
            ...state,
            searchValue: action.value
        } 
        case TOGGLE_LOADER: return {
            ...state,
            loadingSearch: action.active
        }
        case CLEAR_SEARCH_VALUE: return {
            ...state,
            searchValue: ''
        }
        default: return state
    }
}
