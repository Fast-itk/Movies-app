import { GET_DETAIL_MOVIE, TOGGLE_LOADER } from "../types/types"

export const detailReducer = (state, action) => {
    switch(action.type) {
        case GET_DETAIL_MOVIE: return {
            ...state,
            detailMovie: {
                backdropPath: action.backdrop_path,
                title: action.title,
                budget: action.budget,
                genres: action.genres,
                overview: action.overview,
                releaseDate: action.release_date
            },
            person: {
                cast: action.cast,
                crew: action.crew
            }
        } 
        case TOGGLE_LOADER: return {
            ...state,
            loading: action.active
        }
        default: return state
    }
}
