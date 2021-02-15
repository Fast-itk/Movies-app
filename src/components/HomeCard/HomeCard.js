import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className="w-100 d-flex justify-content-center">
            <div className="card mb-3 shadow" style={{maxWidth: '80%'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img 
                        className="rounded" 
                        src={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : keys.NOT_IMAGE} 
                        alt={title} 
                    />
                    </div>
                    <div className="col-md-5 offset-md-3">
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