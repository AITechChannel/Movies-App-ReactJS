import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi from '~/api/tmdbApi';
import Button from '../GlobalComponents/Button';
import VideoCard from '../VideoCard';
import styles from './VideoSlider.module.scss';
const cx = classNames.bind(styles);

function VideoSlider({ methodName, category, type, id, title, more }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (methodName === 'getMoviesList') {
            const params = { page: 1 };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getMoviesList(type, { params });

                    setItems(res.results);
                } catch (error) {
                    console.log('Error fecth api video card list dsf');
                }
            };
            getVideoCardList();
        } else if (methodName === 'getTvList') {
            const params = { page: 1 };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getTvList(type, { params });

                    setItems(res.results);
                } catch (error) {
                    console.log('Error fecth api video card list dsf');
                }
            };
            getVideoCardList();
        } else if (methodName === 'getSimilar') {
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getSimilar(category, id);
                    setItems(res.results);
                } catch (error) {
                    console.log('Error fecth api similar');
                }
            };
            getVideoCardList();
        }
    }, [id, category, methodName, type]);

    return (
        <div className={cx('movie-list-container')}>
            <div className={cx('header-list')}>
                {title && <h1>{title}</h1>}
                {more && (
                    <Button outline small to={`/Movies-App-ReactJS-TuanAnhDoan/${category}`}>
                        View more
                    </Button>
                )}
            </div>
            <div className={cx('slider-container')}>
                <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                    {items.map((item, i) => (
                        <SwiperSlide key={i} className={cx('swiper-slide')}>
                            {({ isActive }) => (
                                <VideoCard
                                    key={`category-${i}`}
                                    title={item.title ? item.title : item.name}
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
