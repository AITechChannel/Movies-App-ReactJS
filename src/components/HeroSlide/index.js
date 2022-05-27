import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import React, { useEffect, useState } from 'react';

import tmdbApi, { category, movieType } from '~/api/tmdbApi';

import classNames from 'classnames/bind';
import Styles from './HeroSlide.module.scss';

import SlideItem from './Components/SlideItem';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import apiConfig from '~/api/apiConfig';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(Styles);

function HeroSlide() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const res = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovies(res.results);
            } catch (error) {}
        };
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            <Swiper spacebetween={0} slideperview={1}>
                {movies.map((movie, i) => (
                    <SwiperSlide>
                        {({ isActive }) => <SlideItem movie={movie} className={isActive ? 'active' : 'not active'} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroSlide;
