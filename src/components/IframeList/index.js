import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '~/api/apiConfig';
import tmdbApi, { category } from '~/api/tmdbApi';
import CastList from '../CastList';
import Button from '../GlobalComponents/Button';
import styles from './IframeList.module.scss';
const cx = classNames.bind(styles);
function IframeList({ cate, id }) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const params = {};
        const getData = async () => {
            try {
                const res = await tmdbApi.getVideos('movie', id, { params });
                setItems(res.results);

                console.log(res);
            } catch (error) {
                console.log('Error fecth asdfsdfcard list');
            }
        };
        getData();
    }, [id]);

    return (
        items && (
            <div className={cx('iframe-list-container')}>
                {items.slice(0, 5).map((e, i) => (
                    <div className={cx('iframe-item')}>
                        <h3>{e.name}</h3>
                        <iframe src={'http://youtube.com/embed/' + e.key} type="video/web"></iframe>
                    </div>
                ))}
            </div>
        )
    );
}

export default IframeList;
