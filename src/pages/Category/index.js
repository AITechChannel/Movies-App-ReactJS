import React, { useEffect } from 'react';
import VideoCardList from '~/components/VideoSlider';
import '~/components/HeroSlide';
import HeroSlide from '~/components/HeroSlide';
import { category, movieType, tvType } from '~/api/tmdbApi';
import Videolist from '~/components/VideoList';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import Button from '~/components/GlobalComponents/Button';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Category() {
    const location = useLocation();

    const [searchValue, setSearchValue] = useState('');

    const { category, keyword } = useParams();

    console.log(searchValue);

    const handleOnChangeInput = (e) => {
        setSearchValue(e.target.value);

        // const handleEnter =() => {

        // }
        // window.addEventListener('keydown', handleEnter)
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className={cx('category-wrapper')}>
            <div className={cx('header-page')}>
                {category === 'movie' && <h1 className={cx('title')}>Movies</h1>}
                {category === 'tv' && <h1 className={cx('title')}>TV series</h1>}
            </div>
            <div className={cx('search-container')}>
                <div className={cx('search')}>
                    <input
                        className={cx('input-search')}
                        type="text"
                        placeholder="Enter key word"
                        onChange={(e) => handleOnChangeInput(e)}
                    />
                    <Button className={cx('btn-search')} primary small to={`/${category}/search/${searchValue}`}>
                        Search
                    </Button>
                </div>
            </div>
            {category === 'movie' && <Videolist category={category} type={movieType.popular} />}
            {category === 'tv' && <Videolist category={category} type={tvType.popular} />}
            {searchValue !== '' && (
                <Videolist keyword={keyword} searchValue={searchValue} category={category} type={movieType.popular} />
            )}
        </div>
    );
}

export default Category;
