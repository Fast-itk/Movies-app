import React, { useEffect, useContext } from 'react'

import LoadingPage from '../components/LoadingPage/LoadingPage'
import Slider from '../components/Slider/Slider'
import { DetailContext } from '../context/detail/detailContext'

const DetailPage = ({match}) => {
    const id = match.params.id
    const {detailMovie, person, getDetailMovie, loading} = useContext(DetailContext)
    
    useEffect(() => {
        getDetailMovie(id)
        // eslint-disable-next-line
    }, [id])


    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <LoadingPage/>
            </div>
        )
    }

    const {title, backdrop_path, budget, genres, overview, release_date} = detailMovie

    const {crew, cast} = person    

    if (crew) {
        var directing = crew.map((i) => {
            if (i.job === 'Director') {
                return i.name
            } else return null
        }).join(' ')
    }

    if (release_date) {
       var realiseYear = release_date.split('-')[0]
    }

    if (genres) {
        var genre = genres.map((g, index) => {
            return (
                <span
                    key={index}
                    className="text-capitalize"
                >{ index !== genres.length - 1 
                    ? g.name + ', '
                    : g.name  } 
                </span>
            )
        })
    }

    return (
        <div className="container"> 
             <div className="row pt-4">
                 <div className="col-sm-6">
                     <h2 className="pb-4">Фильм: { title }</h2>
                 <div>
                    <img 
                        className="img-fluid rounded shadow" 
                        src={`https://image.tmdb.org/t/p/w500${backdrop_path ? backdrop_path : null}`} 
                        alt={title} 
                    />
                 </div>
                 </div>
                 <div className="col-sm-6"> 
                    <h2 className="pb-3">Общая Информация</h2>
                    <p><span className="text-secondary">Бюджет: </span>{ budget } руб</p>
                    <p><span className="text-secondary">Год: </span>{ realiseYear }</p>
                    <p><span className="text-secondary">Жанры: </span>{ genre }</p>
                    <p><span className="text-secondary">Режиссер: </span>{ directing }</p>
                 </div>
             </div>
             <div className="py-3 px-0 col-sm-6">
                 <h3>Описание: </h3>
                 <p>{overview}</p>
             </div>
            { cast 
            ? <Slider actorsList={cast} />
            : null}
             

        </div>
    )
}

export default DetailPage