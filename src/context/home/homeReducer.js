import { GET_POPULARITY, TOGGLE_LOADER } from "../types/types"


export const homeReducer = (state, action) => {
    switch(action.type) {
        case GET_POPULARITY: return {
            ...state,
            popularity: action.targetData
        }
        case TOGGLE_LOADER: return {
            ...state,
            loading: action.active
        }
        default: return state
    }
}

