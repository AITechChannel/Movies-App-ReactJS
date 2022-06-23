import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { GiFilmSpool } from 'react-icons/gi';
import { MdMonitor } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import logo from '~/assets/logo.png';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

const headerNav = [
    { display: 'Home', path: '/', icon: <AiOutlineHome /> },
    { display: 'Movies', path: '/movie', icon: <GiFilmSpool /> },
    { display: 'TV series', path: '/tv', icon: <MdMonitor /> },
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
                            <Link to={e.path} className={cx('link')}>
                                <span className={cx('icon')}>{e.icon}</span>
                                <span>{e.display}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
