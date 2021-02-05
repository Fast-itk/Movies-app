import React from 'react'
import keys from '../../config/keys'

const ActorCard = ({role, name, photo}) => {

    return (
        <>
            <div className="card">
                <img 
                    className="card-img-top" 
                    src={photo ? `https://image.tmdb.org/t/p/w500${photo}` : keys.NOT_IMAGE}
                    alt={name} />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><span>Исполнитель роли: </span></p>
                    <p className="card-text">{role}</p>
                </div>
            </div>
        </>
    )
   
}

export default ActorCard