import { SEARCH_MOVIES } from "../types/types"


export const SearchReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_MOVIES: return {
            ...state, 
            searchResults: action.data
        }
        default: return state
    }
}
