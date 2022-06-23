import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import Styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);
function Modal({ children, onClose }) {
    const closeRef = useRef();

    const handleOnClickInner = (e) => {
        // e.stopPropagation();
    };
    return (
        <div className={cx('container')} onClick={onClose}>
            <div className={cx('inner')} onClick={handleOnClickInner}>
                <div className={cx('content')}>{children}</div>
                <div ref={closeRef} className={cx('icon--close')} onClick={onClose}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
        </div>
    );
}

export default Modal;
