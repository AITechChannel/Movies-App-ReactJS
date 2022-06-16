import React from 'react';
import VideoCardList from '~/components/VideoSlider';
import '~/components/HeroSlide';
import HeroSlide from '~/components/HeroSlide';
import { category, movieType, tvType } from '~/api/tmdbApi';
import Videolist from '~/components/VideoList';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import Button from '~/components/GlobalComponents/Button';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Category() {
    const pathname = useLocation();
    return (
        <div className={cx('category-wrapper')}>
            <div className={cx('header-page')}>
                {pathname.pathname === `/${category.movie}` && <h1 className={cx('title')}>Movies</h1>}
                {pathname.pathname === `/${category.tv}` && <h1 className={cx('title')}>TV series</h1>}
            </div>
            <div className={cx('search-container')}>
                <div className={cx('search')}>
                    <input className={cx('input-search')} type="text" placeholder="Enter key word" />
                    <Button className={cx('btn-search')} primary small>
                        Search
                    </Button>
                </div>
            </div>
            {pathname.pathname === `/${category.movie}` && (
                <Videolist category={category.movie} type={movieType.popular} />
            )}
            {pathname.pathname === `/${category.tv}` && <Videolist category={category.tv} type={tvType.popular} />}
            <div className={cx('load-more')}>
                <Button outline small>
                    Load more
                </Button>
            </div>
        </div>
    );
}

export default Category;
