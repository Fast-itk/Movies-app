import { GET_DETAIL_MOVIE, TOGGLE_LOADER } from "../types/types"

export const detailReducer = (state, action) => {
    switch(action.type) {
        case GET_DETAIL_MOVIE: return {
            ...state,
            detailMovie: action.movieData,
            person: action.actorsData
        } 
        case TOGGLE_LOADER: return {
            ...state,
            loading: action.active
        }
        default: return state
    }
}
