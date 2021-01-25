
import { TOGGLE_RANDOM_LOADER, SET_DATA } from '../types/types'

export const randomReducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_RANDOM_LOADER: return {
            ...state, 
            randomLoading: action.loading
        } 
        case SET_DATA: {
            return {
                ...state,
                randomMovie: action.data
            }
        }
        default: return state
    }
}

