import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import React, { useEffect, useState } from 'react';

import './styles.module.scss';
import tmdbApi, { category, movieType } from '~/api/tmdbApi';

import classNames from 'classnames/bind';
import Styles from './styles.module.scss';

import SlideItem from './Components/SlideItem';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import apiConfig from '~/api/apiConfig';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(Styles);

function HeroSlide() {
    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     const getMovies = async () => {
    //         const params = { page: 1 };
    //         try {
    //             const res = await tmdbApi.getMoviesList(movieType.popular, { params });
    //             setMovies(res.results);
    //         } catch (error) {}
    //     };
    //     getMovies();
    // }, []);
    // console.log(movies);
    return (
        <div>
            <Swiper>
                <SwiperSlide spacebetween={0} slidesperview={1}>
                    {({ isActive }) => (
                        <SlideItem />
                        // <img
                        //     className={cx(`${isActive ? 'active' : 'not active'}`)}
                        //     src={apiConfig.originalImage(e.backdrop_path)}
                        // />
                    )}
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeroSlide;
