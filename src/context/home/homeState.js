import React, {useReducer} from 'react'

import {homeReducer} from './homeReducer'
import {HomeContext} from './homeContext'
import useFetch from '../../hooks/fetch.hook'
import keys from '../../config/keys'
import { TOGGLE_LOADER, GET_POPULARITY } from '../types/types'

const HomeState = ({children}) => {
    const initialState = {
        popularity: [],
        loading: false
    }

    const [state, dispatch] = useReducer(homeReducer, initialState)

    const {request} = useFetch()

    const API_KEY = keys.API_KEY

    const setLoading = active => dispatch({type: TOGGLE_LOADER, active})

    const getPopularity = async () => {
        try {
            setLoading(true)
            let targetData = []
            const response = await request(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RUS&page=1`)

            response.results.forEach(movie => {
                const data = {
                    backdropPath: movie.backdrop_path,
                    overview: movie.overview,
                    title: movie.title,
                    id: movie.id
                }

                targetData.push(data)
            })

            dispatch({type: GET_POPULARITY, targetData})

            setLoading(false)
        } catch(e) {
            setLoading(false)
            console.log(e)
        }
    }

    const {popularity, loading} = state

    return (
        <HomeContext.Provider value={{popularity, loading, getPopularity}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeState