import React, { useState, useEffect } from 'react';
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled } from 'react-icons/tb';
import './Theme.css';

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
                        <TbSquareRoundedNumber1Filled className="theme-1" />
                    </div>
                </button>
                <button className={`theme-button ${currentTheme === 'theme-2' ? 'active' : ''}`} onClick={() => changeTheme('theme-2')}>
                    <div className="btn-theme-col">
                        <TbSquareRoundedNumber2Filled className="theme-2" />
                    </div>
                </button>
                <button className={`theme-button ${currentTheme === 'theme-3' ? 'active' : ''}`} onClick={() => changeTheme('theme-3')}>
                    <div className="btn-theme-col">
                        <TbSquareRoundedNumber3Filled className="theme-3" />
                    </div>
                </button>
            </div>
        )
    );
};

export default Theme;
