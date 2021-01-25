import React, {useContext} from 'react'

import { RandomContext } from '../../context/random/randomContext'
import Loading from '../Loading/Loading'
import cls from './RandomMovie.module.scss'
import RandomMovieCard from './RandomMovieCard/RandomMovieCard'


const RandomMovie = () => {

    const random = useContext(RandomContext)
    const {title, genres, overview, poster_path} = random.state.randomMovie
    const randomLoading = random.state.randomLoading
    
    return (
        <>
            <div className="text-center">
                <button onClick={random.getRandomMovie} className="btn btn-lg btn-info m-4 ofset-6">Рандомный фильм</button>
            </div>
            <div className={['d-flex', 'align-items-center', 'justify-content-center', cls.sectionHeight].join(' ')} >
            {randomLoading ? <Loading/> : title && genres && overview && poster_path ? 
                <RandomMovieCard />
            : null}
            </div>
            
             {/* <h1>hello</h1> */}
        </>
    )
}

export default RandomMovie