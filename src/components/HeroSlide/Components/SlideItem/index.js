import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import apiConfig from '~/api/apiConfig';
import './styles.module.scss';
import Styles from './styles.module.scss';
import tmdbApi, { category, movieType } from '~/api/tmdbApi';

const cx = classNames.bind(Styles);

function SlideItem({ className, item }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const res = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovies(res.results.slice(0, 4));
            } catch (error) {}
        };
        getMovies();
    }, []);
    console.log(movies);
    // const background = apiConfig.originalImage();

    return (
        <>
            {movies.map((e, i) => (
                <div
                    style={{ backgroundImage: `url(${apiConfig.originalImage(e.backdrop_path)})` }}
                    className={cx('container')}
                >
                    <div className={cx('image')}>
                        <img src={apiConfig.originalImage(e.poster_path)} />
                    </div>
                    <div className={cx('content')}>
                        <h2>{e.title}</h2>
                        <p>{e.overview}</p>
                    </div>
                </div>
            ))}
        </>
    );
    // return <div className={cx('container')} style={{ backgroundImage: `url(${item.poster_path})` }}></div>;
}

export default SlideItem;
