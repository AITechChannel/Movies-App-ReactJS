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
                <Link to="/">Tuananh Doan</Link>
            </div>
            <div className={cx('menu')}>
                <ul className={cx('menu-list')}>
                    <Link to="/" className={cx('link')}>
                        <li>Home</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>Contact Us</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>Term of services</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>About Us</li>
                    </Link>
                </ul>
                <ul className={cx('menu-list')}>
                    <Link to="/" className={cx('link')}>
                        <li>Live</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>FAQ</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>Premium</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>Pravacy policy</li>
                    </Link>
                </ul>
                <ul className={cx('menu-list')}>
                    <Link to="/" className={cx('link')}>
                        <li>You must watch</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>Recent release</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>Top IMDB</li>
                    </Link>
                    <Link to="/" className={cx('link')}>
                        <li>More</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
