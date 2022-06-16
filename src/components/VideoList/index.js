import React, { useEffect, useState } from 'react';
import Button from '../GlobalComponents/Button';
import classNames from 'classnames/bind';
import styles from './VideoList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tmdbApi, { category, movieType, tvType } from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoCard from '../VideoCard';
const cx = classNames.bind(styles);
function VideoList({ category, type }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (category === 'movie') {
            const params = { page: 1 };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getMoviesList(type, { params });

                    console.log(res.results);

                    setItems(res.results);
                } catch (error) {
                    console.log('Error fecth api video card list');
                }
            };
            getVideoCardList();
        } else if (category === 'tv') {
            const params = { page: 1 };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getTvList(type, { params });

                    console.log(res.results);

                    setItems(res.results);
                } catch (error) {
                    console.log('Error fecth api video card list');
                }
            };
            getVideoCardList();
        }
    }, []);
    return (
        <div className={cx('list-container')}>
            <div className={cx('list-item')}>
                {items.map((item, i) => (
                    <VideoCard
                        key={`category-${i}`}
                        title={item.title}
                        posterPath={item.poster_path}
                        category={category}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default VideoList;
