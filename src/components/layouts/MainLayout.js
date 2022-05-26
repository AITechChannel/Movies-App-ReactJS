import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import React from 'react';

function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;
