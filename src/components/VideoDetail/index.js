import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import apiConfig from '~/api/apiConfig';
import tmdbApi from '~/api/tmdbApi';
import CastList from '../CastList';
import IframeList from '../IframeList';
import styles from './VideoDetail.module.scss';
const cx = classNames.bind(styles);

function VideoDetail({ category, id, onError }) {
    const [items, setItems] = useState(null);
    const handleNotFound = (name) => {
        onError(name);
    };

    useEffect(() => {
        const params = {};
        const getData = async () => {
            try {
                const res = await tmdbApi.getDetail(category, id, { params });
                setItems(res);
            } catch (error) {
                console.log('Error fecth asdfsdfcard list');
                handleNotFound('error');
            }
        };
        getData();
    }, [category, id]);

    return (
        items && (
            <div className={cx('video-detail-container')}>
                <div
                    className={cx('banner')}
                    style={{ backgroundImage: `url(${apiConfig.originalImage(items.backdrop_path)})` }}
                ></div>
                <div className={cx('inner')}>
                    <div className={cx('image')}>
                        <img src={apiConfig.w500Image(items.poster_path)} alt="img poster" />
                    </div>
                    <div className={cx('content')}>
                        <h1 className={cx('title')}>{items.title ? items.title : items.name}</h1>
                        <div className={cx('genres')}>
                            {items.genres.map((e, i) => (
                                <span className={cx('label')} key={`genres-${i}`}>
                                    {e.name}
                                </span>
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
