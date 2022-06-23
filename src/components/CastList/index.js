import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import apiConfig from '~/api/apiConfig';
import tmdbApi from '~/api/tmdbApi';
import styles from './CastList.module.scss';
const cx = classNames.bind(styles);

function CastList({ id }) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const params = {};
        const getData = async () => {
            try {
                const res = await tmdbApi.getCredits('movie', id, { params });
                setItems(res);
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
                    <div key={`cast- ${i}`} className={cx('cast-item')}>
                        {e.profile_path && (
                            <img key={`cast_${i}`} src={apiConfig.w500Image(e.profile_path)} alt="img cast" />
                        )}
                        {e.profile_path && <p>{e.name}</p>}
                    </div>
                ))}
            </div>
        )
    );
}

export default CastList;
