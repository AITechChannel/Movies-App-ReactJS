import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import tmdbApi from '~/api/tmdbApi';
import styles from './IframeList.module.scss';
const cx = classNames.bind(styles);

function IframeList({ id }) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const params = {};
        const getData = async () => {
            try {
                const res = await tmdbApi.getVideos('movie', id, { params });
                setItems(res.results);
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
                    <div key={`iframe-${i}`} className={cx('iframe-item')}>
                        <h3>{e.name}</h3>
                        <div className={cx('iframe-container')}>
                            <iframe src={'http://youtube.com/embed/' + e.key} type="video/web"></iframe>
                        </div>
                    </div>
                ))}
            </div>
        )
    );
}

export default IframeList;
