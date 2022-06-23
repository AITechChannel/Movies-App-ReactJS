import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'swiper/css';
import apiConfig from '~/api/apiConfig';
import Button from '../GlobalComponents/Button';
import styles from './VideoCard.module.scss';
const cx = classNames.bind(styles);
function VideoCard({ title, category, posterPath, id }) {
    return (
        <div className={cx('card-container')}>
            <Link to={`/${category}/${id}`}>
                <div className={cx('img-tag')} style={{ backgroundImage: `url(${apiConfig.w500Image(posterPath)})` }}>
                    <Button className={cx('btn-icon')} primary>
                        <span>
                            <FontAwesomeIcon icon={faPlay} />
                        </span>
                    </Button>
                </div>
            </Link>
            <Link to={`/${category}/${id}`}>
                <h1 className={cx('title')}>{title}</h1>
            </Link>
        </div>
    );
}

export default VideoCard;
