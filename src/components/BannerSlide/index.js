import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { category, movieType } from '~/api/tmdbApi';
import Styles from './BannerSlide.module.scss';
import SlideItem from './Components/SlideItem';

import Modal from '../GlobalComponents/Modal';

const cx = classNames.bind(Styles);

function BannerSlide() {
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
        <div className={cx('banner-slide-container')}>
            <Swiper
                grabCursor={true}
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                // autoplay={{
                //     delay: 2500,
                // }}
                style={{ height: '100%' }}
            >
                {movies.map((movie, i) => (
                    <SwiperSlide key={i} style={{ height: '100%' }}>
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

export default BannerSlide;
