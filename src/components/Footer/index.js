import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logo from '~/assets/logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-container')}>
            <div className={cx('logo-home')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                </div>
                <Link to="/Movies-App-ReactJS-TuanAnhDoan/">Tuananh Doan</Link>
            </div>
            <div className={cx('menu')}>
                <ul className={cx('menu-list')}>
                    <a className={cx('link')}>
                        <li>Home</li>
                    </a>
                    <a className={cx('link')}>
                        <li>Contact Us</li>
                    </a>
                    <a className={cx('link')}>
                        <li>Term of services</li>
                    </a>
                    <a className={cx('link')}>
                        <li>About Us</li>
                    </a>
                </ul>
                <ul className={cx('menu-list')}>
                    <a className={cx('link')}>
                        <li>Live</li>
                    </a>
                    <a className={cx('link')}>
                        <li>FAQ</li>
                    </a>
                    <a className={cx('link')}>
                        <li>Premium</li>
                    </a>
                    <a className={cx('link')}>
                        <li>Pravacy policy</li>
                    </a>
                </ul>
                <ul className={cx('menu-list')}>
                    <a className={cx('link')}>
                        <li>You must watch</li>
                    </a>
                    <a className={cx('link')}>
                        <li>Recent release</li>
                    </a>
                    <a className={cx('link')}>
                        <li>Top IMDB</li>
                    </a>
                    <a className={cx('link')}>
                        <li>More</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
