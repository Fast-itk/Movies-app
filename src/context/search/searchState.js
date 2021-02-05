import React, {useReducer, useCallback} from 'react'

import useFetch from '../../hooks/fetch.hook'
import keys from '../../config/keys'
import { SearchContext } from './searchContext'
import { SearchReducer } from './searchReducer'
import { CLEAR_SEARCH_VALUE, SEARCH_MOVIES, SEARCH_VALUE, TOGGLE_LOADER } from '../types/types'

const API_KEY = keys.API_KEY

const SearchState = ({ children }) => {

    const initialState = {
        searchResults: [],
        searchValue: '',
        loadingSearch: false
    }

    const {request} = useFetch()

    const [state, dispatch] = useReducer(SearchReducer, initialState)

    const saveData = data => dispatch({type: SEARCH_MOVIES, data})

    const searchRequest = value => dispatch({type: SEARCH_VALUE, value})

    const setLoading = active => dispatch({type: TOGGLE_LOADER, active})

    const searchMovies = useCallback(async value => {
        try {
            const data = []
            
            setLoading(true)
            searchRequest(value)

            if (value) {
                const response = await request(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${value}&page=1&include_adult=false`)

                response.results.forEach((movie) => {
                    const result = {
                        title: movie.title,
                        poster: movie.poster_path,
                        id: movie.id
                    }
    
                    data.push(result)
                })

                saveData(data)
            }
            
            return setLoading(false)
            

        } catch(e) {
            setLoading(false)
            console.log(e)
        }

    }, [state.searchValue]) // eslint-disable-line react-hooks/exhaustive-deps

    const clearSearch = () => dispatch({type: CLEAR_SEARCH_VALUE})

    return (
        <SearchContext.Provider value={{state ,searchMovies, clearSearch}}>
            { children }
        </SearchContext.Provider>
    )
}

export default SearchState