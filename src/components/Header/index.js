import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { GiFilmSpool } from 'react-icons/gi';
import { MdMonitor } from 'react-icons/md';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const headerNav = [
    { display: 'Home', path: '/Movies-App-ReactJS-TuanAnhDoan/', icon: <AiOutlineHome /> },
    { display: 'Movies', path: '/Movies-App-ReactJS-TuanAnhDoan/movie', icon: <GiFilmSpool /> },
    { display: 'TV series', path: '/Movies-App-ReactJS-TuanAnhDoan/tv', icon: <MdMonitor /> },
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
                    <Link to="/Movies-App-ReactJS-TuanAnhDoan/">Movies</Link>
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
