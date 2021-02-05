import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import ActorCard from '../ActorCard/ActorCard';

const Slider = ({actorsList}) => {

        const actors = actorsList.map((actor, index) => {
            return (
                <SwiperSlide key={index}>
                    <ActorCard 
                        role={actor.character} 
                        name={actor.name}
                        photo={actor.profile_path}
                    />
                </SwiperSlide>
            )
            
        }) 

        return (
            <div className="my-3">
                <h3 className="pb-2">Каст актеров</h3>
                <Swiper
                spaceBetween={50}
                slidesPerView={4}
                >
                    {actors}
                </Swiper>
            </div>
            
        )
}

export default Slider