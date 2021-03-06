import React from 'react'
import { Link } from 'react-router-dom'

import keys from '../../../config/keys'
import cls from './SearchItem.module.scss'

const SearchItem = ({title, image, id, clear}) => {

    const urlNotImage = keys.NOT_IMAGE

    return (
        <>
            <Link 
                to={`/detail/${id}`} 
                className={
                ['d-block', 'text-decoration-none', 'text-dark', 'col-lg-3', 'm-3', cls.linkItem, cls.fadeIn].join(' ')
                } 
                onClick={clear}
            >
                <div className={['card border-0', cls.cardItem].join(' ')}>
                    <div className="row g-0">
                        <div className="col-4">
                        <img 
                            className="img-fluid rounded" 
                            style={{maxHeight: '200px'}} 
                            src={image ? `https://image.tmdb.org/t/p/w500${image}` : urlNotImage} 
                            alt={title} 
                        />
                            
                        </div>
                        <div className="col-8 p-0">
                            <div className="card-body pl-0">
                                <h5 className="card-title text-break">{title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Link> 
        </>
    )
}

export default SearchItem