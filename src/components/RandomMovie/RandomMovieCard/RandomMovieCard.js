import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import { RandomContext } from '../../../context/random/randomContext'
import cls from './RandomMovieCard.module.scss'

const RandomMovieCard = () => {

    const random = useContext(RandomContext)
    const {title, genres, overview, poster_path} = random.state.randomMovie

    return (
        <div className={['card', 'mb-3', 'shadow', cls.cardWidth, cls.show].join(' ')}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img className="img-fluid rounded" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{overview}</p>
                        <p><strong>Жанры</strong>:{
                        genres ? genres.map((genre, i) => {
                            return (
                                <span
                                    key={i}
                                    className="badge bg-secondary text-capitalize text-light m-1 p-2"
                                >{genre.name}</span>
                            )
                        }) : null}</p>
                        <div>
                            <p><NavLink className="text-secondary" to="/detail/:id">Подробнее...</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomMovieCard