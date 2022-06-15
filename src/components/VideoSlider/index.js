import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '~/api/apiConfig';
import tmdbApi from '~/api/tmdbApi';
import Button from '../GlobalComponents/Button';
import VideoCard from '../VideoCard';
import styles from './VideoSlider.module.scss';
const cx = classNames.bind(styles);
function VideoSlider({ title, category, type }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (category == 'movie') {
            const params = { page: 1 };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getMoviesList(type, { params });

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
            <div className={cx('header-list')}>
                <h1>{title}</h1>
                <Button outline small>
                    View more
                </Button>
            </div>
            <div className={cx('slider-container')}>
                <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                    {items.map((item, i) => (
                        <SwiperSlide key={i} className={cx('swiper-slide')}>
                            {({ isActive }) => (
                                <VideoCard
                                    key={`category-${i}`}
                                    title={item.title}
                                    posterPath={item.poster_path}
                                    category={category}
                                    id={item.id}
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default VideoSlider;