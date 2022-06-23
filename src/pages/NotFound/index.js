import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';
const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('not-found-container')}>
            <span>
                <FontAwesomeIcon icon={faFaceFrown} />
            </span>
            <h1> Page not found</h1>
        </div>
    );
}

export default NotFound;
