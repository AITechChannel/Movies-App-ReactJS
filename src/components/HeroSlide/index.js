import classNames from 'classnames/bind';
import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { movieType, category } from '~/api/tmdbApi';
import SlideItem from './Components/SlideItem';
import Styles from './HeroSlide.module.scss';
import 'swiper/css';

import Modal from '../GlobalComponents/Modal';

const cx = classNames.bind(Styles);

function HeroSlide() {
    const [movies, setMovies] = useState([]);

    const [movieCurrent, setMovieCurrent] = useState('');

    const [showTrailer, setShowTrailer] = useState(false);
    const [videos, setVideos] = useState([]);

    const handleWatch = useCallback((movie, i) => {
        setMovieCurrent(movie);
        setShowTrailer(true);
        console.log(movie);
    });

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const res = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovies(res.results.slice(0, 4));
            } catch (error) {}
        };
        getMovies();
    }, []);

    useEffect(() => {
        const getVideos = async () => {
            try {
                const res = await tmdbApi.getVideos(category.movie, movieCurrent.id);
                console.log(res);
                setVideos(res.results);
            } catch (error) {}
        };
        getVideos();
    }, [movieCurrent]);

    return (
        <div className={cx('hero-slide-container')}>
            <Swiper spaceBetween={0} slidesPerView={1}>
                {movies.map((movie, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <>
                                <SlideItem
                                    movie={movie}
                                    className={isActive ? 'active' : ''}
                                    onWatch={() => handleWatch(movie, i)}
                                    showTrailer={showTrailer}
                                    movieCurrent={movieCurrent}
                                />
                            </>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {showTrailer && (
                <Modal onClose={() => setShowTrailer(false)}>
                    {videos.length > 0 && (
                        <iframe src={'http://youtube.com/embed/' + videos[0].key} type="video/web"></iframe>
                    )}
                </Modal>
            )}
        </div>
    );
}

export default HeroSlide;
