import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';
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
    const headerRef = useRef();
    const active = headerNav.findIndex((e) => e.path === pathname);

    const [showBgHeader, setShowBgHeader] = useState(false);

    useEffect(() => {
        const handleSrollY = () => {
            if (window.scrollY > 80) {
                setShowBgHeader(true);
                return;
            }

            setShowBgHeader(false);
        };
        window.addEventListener('scroll', handleSrollY);
    });
    return (
        <div ref={headerRef} className={cx('header', `${showBgHeader ? 'header-bg' : ''}`)}>
            <div className={cx('wrap', 'container')}>
                <div className={cx('logo-home')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="" />
                    </div>
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
