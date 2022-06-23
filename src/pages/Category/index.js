import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { movieType, tvType } from '~/api/tmdbApi';
import '~/components/BannerSlide';
import Button from '~/components/GlobalComponents/Button';
import Videolist from '~/components/VideoList';
import styles from './Category.module.scss';
const cx = classNames.bind(styles);

function Category() {
    const location = useLocation();

    const naviagte = useNavigate();

    const [searchValue, setSearchValue] = useState('');

    const [search, setSearch] = useState('');

    const { category, keyword } = useParams();

    const handleOnChangeInput = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        if (searchValue !== '') {
            naviagte(`/${category}/search/${searchValue}`);
            setSearch(searchValue);
            setSearchValue('');
        }
    };

    useEffect(() => {
        if (keyword) {
            // setSearchValue(keyword);
            setSearch(keyword);
        }
    }, [keyword]);

    const handleEnter = (e) => {
        console.log('enter');
        // e.preventDefault();
        if (e.keyCode === 13) {
            handleSearch();
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleEnter);

        return () => {
            window.removeEventListener('keydown', handleEnter);
        };
    }, [searchValue]);

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
                        value={searchValue}
                        className={cx('input-search')}
                        type="text"
                        placeholder="Enter key word"
                        onChange={(e) => handleOnChangeInput(e)}
                    />
                    <Button
                        className={cx('btn-search')}
                        primary
                        small
                        // to={`/${category}/search/${searchValue}`}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </div>
            </div>
            {category === 'movie' && !keyword && (
                <Videolist keyword={keyword} category={category} type={movieType.popular} />
            )}
            {category === 'tv' && !keyword && <Videolist keyword={keyword} category={category} type={tvType.popular} />}
            {keyword && <Videolist keyword={keyword} search={search} category={category} type={movieType.popular} />}
        </div>
    );
}

export default Category;
