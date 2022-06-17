import classNames from 'classnames/bind';
import { memo } from 'react';
import apiConfig from '~/api/apiConfig';
import Button from '~/components/GlobalComponents/Button';
import Styles from './SlideItem.module.scss';

const cx = classNames.bind(Styles);

function SlideItem({ movie, className, onWatch }) {
    return (
        <div className={cx('slide-item-container', `${className}`)}>
            <div
                style={{
                    backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})`,
                }}
                className={cx('inner')}
            >
                <div className={cx('content')}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className={cx('action')}>
                        <Button primary> Watch now </Button>
                        <Button outline onClick={onWatch}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div className={cx('image')}>
                    <img src={apiConfig.w500Image(movie.poster_path)} />
                </div>
            </div>
        </div>
    );
}

export default memo(SlideItem);
