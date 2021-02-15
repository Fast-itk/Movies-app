import React from 'react'
import HomeCard from '../HomeCard/HomeCard'

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

// install Swiper modules
SwiperCore.use([Navigation]);

const HomeSlider = ({popularity}) => {

    // const {backdropPath, overview, title, id} = popularity

    const popular = popularity.map((movie, index) => {
        return (
            <SwiperSlide key={index}>
                <HomeCard 
                    imageUrl={movie.backdropPath}
                    overview={movie.overview}
                    title={movie.title}
                    id={movie.id}
                />
            </SwiperSlide>
        )
    })

    return (
        <div className="rounded mb-4">
            <h1>Популярное</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                style={{marginTop: '2rem'}}
            >
                {popular}
            </Swiper>
        </div>
    )
}

export default HomeSlider