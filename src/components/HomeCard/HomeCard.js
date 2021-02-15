import React from 'react'
import { Link } from 'react-router-dom'

import cls from './HomeCard.module.scss'
import keys from '../../config/keys'

const HomeCard = ({imageUrl, overview, title, id}) => {

    const shortOverview = () => {
        
        const overviewInArray = overview.split(' ')

        if (overviewInArray.length > 20) {
            const refactOverview = overviewInArray.splice(0, 20)
            refactOverview[refactOverview.length - 1] = refactOverview[refactOverview.length - 1] + '...'
            const result = refactOverview.join(' ')

            return result
        } else {
            return overview
        }
    }

    return (
        <div className="w-100 d-flex justify-content-center container">
            <div className="card mb-3 shadow" style={{maxWidth: '90%'}}>
                <div className="row g-0">
                    <div className="col-lg-4 text-center">
                    <img 
                        className={['rounded', cls.HomeCardImg].join(' ')}
                        src={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : keys.NOT_IMAGE} 
                        alt={title} 
                    />
                    </div>
                    <div className="col-lg-5 offset-lg-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{shortOverview()}</p>
                        <Link to={`/detail/${id}`}>
                            <button className="btn btn-primary">
                                Подробнее
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard