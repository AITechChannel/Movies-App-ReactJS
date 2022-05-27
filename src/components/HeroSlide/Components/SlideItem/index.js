import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import apiConfig from '~/api/apiConfig';
import Styles from './SlideItem.module.scss';
import tmdbApi, { category, movieType } from '~/api/tmdbApi';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '~/components/GlobalComponents/Button';
const cx = classNames.bind(Styles);

function SlideItem({ movie, className }) {
    return (
        <div className={cx('container')}>
            <div
                style={{
                    backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})`,
                }}
                className={cx('inner')}
            >
                <div className={cx('content')}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className={cx('action')}>
                        <Button primary> Watch now </Button>
                        <Button outline> Watch trailer</Button>
                    </div>
                </div>
                <div className={cx('image')}>
                    <img src={apiConfig.w500Image(movie.poster_path)} />
                </div>
            </div>
        </div>
    );
    // return <div className={cx('container')} style={{ backgroundImage: `url(${item.poster_path})` }}></div>;
}

export default SlideItem;
