import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/logo.png';
const cx = classNames.bind(styles);

const headerNav = [
    { display: 'Home', path: '/' },
    { display: 'Movies', path: '/movie' },
    { display: 'TV series', path: '/tv' },
];

function Header() {
    const { pathname } = useLocation();
    console.log(pathname);
    const headerRef = useRef();
    const active = headerNav.findIndex((e) => e.path === pathname);
    console.log(active);
    return (
        <div ref={headerRef} className={cx('header')}>
            <div className={cx('wrap', 'container')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                    <Link to="/">Movies</Link>
                </div>
                <ul className={cx('nav')}>
                    {headerNav.map((e, i) => (
                        <li className={cx('item', `${i === active ? 'active' : ''}`)} key={i}>
                            <Link to={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
