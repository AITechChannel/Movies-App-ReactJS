import Header from '../Header';
import Footer from '../Footer';

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
