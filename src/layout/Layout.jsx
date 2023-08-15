import React from 'react';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div className="layout-col" style={{ flex: '1' }}>
                {children}
            </div>
            <Footer />
        </div>
    ); 
};

export default Layout;