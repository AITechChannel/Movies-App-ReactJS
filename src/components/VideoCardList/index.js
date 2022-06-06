import React, { useEffect, useState } from 'react';
import Button from '../GlobalComponents/Button';
import classNames from 'classnames/bind';
import styles from './VideoCardList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tmdbApi, { category, movieType, tvType } from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function VideoCardList({ title, category, type }) {
    const [items, setItems] = useState([]);

    console.log(category);

    useEffect(() => {
        if (category == 'movie') {
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
        }
    }, []);
    return (
        <div className={cx('movie-list-container')}>
            <header className={cx('header-list')}>
                <h1>{title}</h1>
                <Button outline small>
                    View more
                </Button>
            </header>
            <div>
                <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                    {items.map((item, i) => (
                        <SwiperSlide key={i} className={cx('swiper-slide')}>
                            {({ isActive }) => (
                                <div className={cx('img-tag')}>
                                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                                    <Button className={cx('btn-icon')} primary to={`/${category}/${item.id}`}>
                                        <span>
                                            <FontAwesomeIcon icon={faPlay} />
                                        </span>
                                    </Button>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default VideoCardList;
