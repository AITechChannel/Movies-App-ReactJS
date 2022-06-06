import Header from '~/components/Header';
import Footer from '~/components/Footer';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

import React from 'react';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
