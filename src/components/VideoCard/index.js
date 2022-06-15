import React, { useEffect, useState } from 'react';
import Button from '../GlobalComponents/Button';
import classNames from 'classnames/bind';
import styles from './VideoCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tmdbApi, { category, movieType, tvType } from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function VideoCard({ title, category, posterPath, id }) {
    return (
        <div className={cx('card-container')}>
            <div className={cx('img-tag')} style={{ backgroundImage: `url(${apiConfig.w500Image(posterPath)})` }}>
                <Button className={cx('btn-icon')} primary to={`/${category}/${id}`}>
                    <span>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                </Button>
            </div>
            <h1 className={cx('title')}>{title}</h1>
        </div>
    );
}

export default VideoCard;
