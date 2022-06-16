import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'swiper/css';
import tmdbApi from '~/api/tmdbApi';
import Button from '../GlobalComponents/Button';
import VideoCard from '../VideoCard';
import styles from './VideoList.module.scss';
const cx = classNames.bind(styles);
function VideoList({ category, type, keyword, searchValue }) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (category === 'movie' && searchValue !== '' && searchValue === undefined) {
            console.log('movie');
            const params = { page: page };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getMoviesList(type, { params });
                    setItems(res.results);
                    setItems((prev) => items.concat(prev));
                } catch (error) {
                    console.log('Error fecth api video card list');
                }
            };
            getVideoCardList();
        } else if (category === 'tv' && !searchValue) {
            console.log('tv');

            const params = { page: page };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.getTvList(type, { params });
                    setItems(res.results);
                    setItems((prev) => items.concat(prev));
                } catch (error) {
                    console.log('Error fecth api video card list');
                }
            };
            getVideoCardList();
        } else if (searchValue !== '') {
            console.log('search value', searchValue);

            const params = { query: searchValue };
            const getVideoCardList = async () => {
                try {
                    const res = await tmdbApi.search('movie', { params });
                    console.log(res.results);
                    setItems(res.results);
                    // setItems((prev) => items.concat(prev));
                } catch (error) {
                    console.log('Error fecth api video card list');
                }
            };
            getVideoCardList();
        }
    }, [page, searchValue]);

    const handOnClickLoadMore = () => {
        setPage(page + 1);
    };
    return (
        <>
            <div className={cx('list-container')}>
                <div className={cx('list-item')}>
                    {items.map((item, i) => (
                        <VideoCard
                            key={`category-${i}`}
                            title={item.title}
                            posterPath={item.poster_path}
                            category={category}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
            <div className={cx('load-more')}>
                <Button outline small onClick={handOnClickLoadMore}>
                    Load more
                </Button>
            </div>
        </>
    );
}

export default VideoList;
