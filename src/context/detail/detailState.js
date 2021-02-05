import React, {useReducer} from 'react'

import {DetailContext} from './detailContext'
import {detailReducer} from './detailReducer'
import useFetch from '../../hooks/fetch.hook'
import keys from '../../config/keys'
import { GET_DETAIL_MOVIE, TOGGLE_LOADER } from '../types/types'

const DetailState = ({children}) => {

    const initialState = {
        detailMovie: {},
        person: {},
        loading: false
    }

    const [state, dispatch] = useReducer(detailReducer, initialState)

    const API_KEY = keys.API_KEY

    const {request} = useFetch()

    const setLoading = (active) => dispatch({type: TOGGLE_LOADER, active})

    const getDetailMovie = async id => {
        try {
            setLoading(true)

            const detailMovie = await request(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ru-RU`)
            const {backdrop_path, title, budget, genres, overview, release_date} = detailMovie

            const actors = await request(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=ru-RU`)
            const {cast, crew} = actors

            const movieData = {backdrop_path, title, budget, genres, overview, release_date}

            const actorsData = {cast, crew}

            dispatch({type: GET_DETAIL_MOVIE, movieData, actorsData})
            setLoading(false)
        } catch(e) {
            setLoading(false)
            console.log(e)
        }
    }

    const {detailMovie, person, loading} = state

    return (
        <DetailContext.Provider value={{detailMovie, person, loading, getDetailMovie}}>
            {children}
        </DetailContext.Provider>
    )
}

export default DetailState