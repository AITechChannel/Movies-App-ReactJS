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
import IframeList from '../IframeList';
import styles from './VideoDetail.module.scss';
const cx = classNames.bind(styles);
function VideoDetail({ category, id }) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const params = {};
        const getData = async () => {
            try {
                const res = await tmdbApi.getDetail(category, id, { params });
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
            <div className={cx('video-detail-container')}>
                <div
                    className={cx('banner')}
                    style={{ backgroundImage: `url(${apiConfig.originalImage(items.backdrop_path)})` }}
                ></div>
                <div className={cx('inner')}>
                    <div className={cx('image')}>
                        <img src={apiConfig.w500Image(items.poster_path)} />
                    </div>
                    <div className={cx('content')}>
                        <h1 className={cx('title')}>{items.title}</h1>
                        <div className={cx('genres')}>
                            {items.genres.map((e, i) => (
                                <Button key={`genres-${i}`} outline small>
                                    {e.name}
                                </Button>
                            ))}
                        </div>
                        <p className={cx('overview')}>{items.overview}</p>
                        <h3>Cast</h3>
                        <CastList cate="movie" id={items.id} />
                    </div>
                </div>
                <div className={cx('iframe-list-container')}>
                    <IframeList id={items.id} />
                </div>
            </div>
        )
    );
}

export default VideoDetail;
