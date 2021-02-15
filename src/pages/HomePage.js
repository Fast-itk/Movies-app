import React, { useContext, useEffect } from 'react'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import LoadingPage from '../components/LoadingPage/LoadingPage'

import RandomMovie from '../components/RandomMovie/RandomMovie'
import { HomeContext } from '../context/home/homeContext'

const HomePage = () => {

    const home = useContext(HomeContext)
    const {getPopularity, loading, popularity} = home

    useEffect(() => {
        getPopularity()
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <LoadingPage />
            </div>
        )
    }

    return (
        <div className="container">
            <HomeSlider popularity={popularity} />
            <RandomMovie />
        </div>
    )
}

export default HomePage