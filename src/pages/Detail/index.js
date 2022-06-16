import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '~/api/apiConfig';
import { tmdbApi } from '~/api/tmdbApi';
import VideoDetail from '~/components/VideoDetail';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './Detail.module.scss';
import VideoSlider from '~/components/VideoSlider';
const cx = classNames.bind(styles);
function Detail() {
    const { category, id } = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div>
            <VideoDetail category={category} id={id} />
            <VideoSlider title="Similar" category={category} id={id} methodName="getSimilar" />
        </div>
    );
}

export default Detail;
