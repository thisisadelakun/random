import React, { useState, useEffect } from 'react';
import './Theme.css';

// import models
import { icons } from '../db/db';

const Theme = () => {
    const [currentTheme, setCurrentTheme] = useState('theme-1');
    const [isThemeVisible, setIsThemeVisible] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setCurrentTheme(storedTheme);
        }
    }, []);

    const changeTheme = (theme) => {
        setCurrentTheme(theme);
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        const themeTimeout = setTimeout(() => {
            setIsThemeVisible(true);
        }, 10000);

        return () => {
            clearTimeout(themeTimeout);
        };
    }, []);

    // Add the currentTheme class to the body element
    useEffect(() => {
        document.body.className = currentTheme;
    }, [currentTheme]);

    return (
        isThemeVisible && (
            <div className="sticky-box">
                <button className={`theme-button ${currentTheme === 'theme-1' ? 'active' : ''}`} onClick={() => changeTheme('theme-1')}>
                    <div className="btn-theme-col">
                        {icons.theme1}
                    </div>
                </button>
                <button className={`theme-button ${currentTheme === 'theme-2' ? 'active' : ''}`} onClick={() => changeTheme('theme-2')}>
                    <div className="btn-theme-col">
                        {icons.theme2}
                    </div>
                </button>
                <button className={`theme-button ${currentTheme === 'theme-3' ? 'active' : ''}`} onClick={() => changeTheme('theme-3')}>
                    <div className="btn-theme-col">
                        {icons.theme3}
                    </div>
                </button>
            </div>
        )
    );
};

export default Theme;
