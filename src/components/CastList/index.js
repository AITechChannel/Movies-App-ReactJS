import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '~/api/apiConfig';
import tmdbApi, { category } from '~/api/tmdbApi';
import Button from '../GlobalComponents/Button';
import styles from './CastList.module.scss';
const cx = classNames.bind(styles);
function CastList({ cate, id }) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const params = {};
        const getData = async () => {
            try {
                const res = await tmdbApi.getCredits('movie', id, { params });
                setItems(res);

                console.log(res);
            } catch (error) {
                console.log('Error fecth asdfsdfcard list');
            }
        };
        getData();
    }, [id]);
    return (
        items && (
            <div className={cx('cast-list-container')}>
                {items.cast.slice(0, 5).map((e, i) => (
                    <div className={cx('cast-item')}>
                        <img key={`cast_${i}`} src={apiConfig.w500Image(e.profile_path)} />
                        <p>{e.name}</p>
                    </div>
                ))}
            </div>
        )
    );
}

export default CastList;
