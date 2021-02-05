import React, {useReducer} from 'react'

import {RandomContext} from './randomContext'
import {randomReducer} from './randomReducer' 
import {TOGGLE_LOADER, SET_DATA} from '../types/types'
import useFetch from '../../hooks/fetch.hook'
import keys from '../../config/keys'



const RandomState = ({children}) => {
    const [state, dispatch] = useReducer(randomReducer, {
        randomMovie: {},
        randomLoading: false
    })
    const {request} = useFetch()

    const API_KEY = keys.API_KEY

    const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min

    const setLoading = active => dispatch({type: TOGGLE_LOADER, loading: active})

    const setData = data => dispatch({type: SET_DATA, data})

    const getRandomMovie = async () => {

        try {
            
            setLoading(true)
            
            const response = await request(`https://api.themoviedb.org/3/movie/${getRandomInRange(5000, 50000)}?api_key=${API_KEY}&language=ru-RU`)

            const {title, genres, overview, poster_path, id} = response

            if (response.status === 404 || (!title || !genres || !overview || !poster_path || !id)) {
                return getRandomMovie()
            }


            const overviewInArray = overview.split(' ')

            if (overviewInArray.length > 75) {
                const refactOverview = overviewInArray.splice(0, 75)
                refactOverview[refactOverview.length - 1] = refactOverview[refactOverview.length - 1] + '...'
                const result = refactOverview.join(' ')

                const data = {title, genres, overview: result, poster_path, id}
                setData(data)
            } else {
                const data = {title, genres, overview, poster_path, id}
                setData(data)
            }
            setLoading(false)
            
        } catch(e) {
            setLoading(false)
            console.log(e)
        }
    }

    return (
        <RandomContext.Provider value={{state, getRandomMovie}}>
            {children}
        </RandomContext.Provider>
    )

}

export default RandomState