import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '~/api/apiConfig';
import tmdbApi, { category } from '~/api/tmdbApi';
import VideoDetail from '~/components/VideoDetail';
import { Link, useLocation } from 'react-router-dom';
import styles from './Detail.module.scss';
const cx = classNames.bind(styles);
function Detail() {
    const [id, setID] = useState('');
    console.log(id);
    const pathname = useLocation();
    useEffect(() => {
        setID(pathname.pathname.substring(7));
        console.log(pathname);
    }, [pathname]);
    return (
        <div>
            <VideoDetail cate="movie" id={id} />
        </div>
    );
}

export default Detail;
