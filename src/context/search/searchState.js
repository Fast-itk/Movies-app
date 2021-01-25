import React, {useReducer} from 'react'

import useFetch from '../../hooks/fetch.hook'
import keys from '../../config/keys'
import { SearchContext } from './searchContext'
import { SearchReducer } from './searchReducer'
import { SEARCH_MOVIES } from '../types/types'


const SearchState = ({ children }) => {

    const API_KEY = keys.API_KEY

    const initialState = {
        searchResults: []
    }

    const [state, dispatch] = useReducer(SearchReducer, initialState)
    
    const {request} = useFetch()

    const saveData = (data) => dispatch({type: SEARCH_MOVIES, data})

    const searchMovies = async value => {

        try {
            const data = []

            const response = await request(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${value}&page=1&include_adult=false`)

            response.results.forEach((movie) => {
                const result = {
                    title: movie.title,
                    poster: movie.poster_path
                }

                data.push(result)
            })
            
            saveData(data)
            

        } catch(e) {
            console.log(e)
        }

    }

    return (
        <SearchContext.Provider value={{state ,searchMovies}}>
            { children }
        </SearchContext.Provider>
    )
}

export default SearchState