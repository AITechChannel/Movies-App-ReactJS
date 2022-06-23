import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logo from '~/assets/logo.png';
import { Link } from 'react-router-dom';
import menuItem from './menuItem';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-container')}>
            <div className={cx('logo-home')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                </div>
                <Link to="/">Tuananh Doan</Link>
            </div>
            <div className={cx('menu')}>
                {menuItem.map((e, i) => (
                    <ul key={`menuItem_${i}`} className={cx('menu-item')}>
                        <li>
                            <Link to={e.to}>{e.name}</Link>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Footer;
