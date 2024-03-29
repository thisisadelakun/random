import React from 'react'
import './Footer.css'
import '../navbar/NavBar.css'

// import models
import { authorInfo, icons2 } from '../../models/db/db'

// import dependency 
import { Link, useLocation } from 'react-router-dom';
import GeoLocate from '../../models/geolocate/GeoLocate';

const Footer = () => {
    const location = useLocation();
    return (
        <div className='footer'>
            <div className="footer-col container">
                <div className="footer-up">
                    <div className="footer-left">
                        <div className='let-contact-me'>
                            <p>LET'S WORK</p>

                            <li className="nav-item nav-item-border">
                                <Link
                                    to="/contact-me"
                                    className="nav-link"
                                    onClick={() => closeMenu()}
                                    exact="true"
                                >
                                    Contact Me
                                </Link>
                            </li>

                            <li className="nav-item nav-item-border">
                                <a className='nav-link' href={authorInfo.resume} download="Adelakun_Résumé.pdf" target="_blank" rel="noopener noreferrer">
                                    Résumé
                                </a>
                            </li>
                        </div>
                    </div>

                    <div className="footer-right">
                        <li className="nav-item nav-item-border">
                            {location.pathname !== '/' && (
                                <Link
                                    to="/"
                                    className="nav-link"
                                    onClick={() => closeMenu()}
                                    exact="true"
                                >
                                    Home
                                </Link>
                            )}
                        </li>
                        <li className="nav-item nav-item-border">
                            {location.pathname !== '/about-me' && (
                                <Link
                                    to="/about-me"
                                    className="nav-link"
                                    onClick={() => closeMenu()}
                                    exact="true"
                                >
                                    About Me
                                </Link>
                            )}
                        </li>
                        <li className="nav-item nav-item-border">
                            {location.pathname !== '/portfolio' && (
                                <Link
                                    to="/portfolio"
                                    className="nav-link"
                                    onClick={() => closeMenu()}
                                    exact="true"
                                >
                                    Portfolio
                                </Link>
                            )}
                        </li>
                        <li className="nav-item nav-item-border">
                            {location.pathname !== '/library/' && (
                                <Link
                                    to="/library/"
                                    className="nav-link"
                                    onClick={() => closeMenu()}
                                    exact="true"
                                >
                                    Library
                                </Link>
                            )}
                        </li>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-social-left mobile-view-only">
                        <li className='nav-link-socios2'>
                            <a href="https://twitter.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.tw}
                            </a>

                            <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178/" target="_blank" rel="noopener noreferrer">
                                {icons2.in}
                            </a>

                            <a href="https://github.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.gt}
                            </a>

                            <a href="https://www.instagram.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.ig}
                            </a>

                            <a href="https://www.frontendmentor.io/profile/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.fm}
                            </a>
                            <a href="https://www.youtube.com/channel/UCU-0h77SK1LV2VzW6X0qaHg" target="_blank" rel="noopener noreferrer">
                                {icons2.yt}
                            </a>
                        </li>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-copy-right">
                        <span className="copyRight">
                            &copy; {authorInfo.firstName} {authorInfo.lastName} {new Date().getFullYear()}
                        </span>
                    </div>
                    <div className="footer-social-right desktop-view-only">
                        <li className='nav-link-socios2'>
                            <a href="https://twitter.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.tw}
                            </a>

                            <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178/" target="_blank" rel="noopener noreferrer">
                                {icons2.in}
                            </a>

                            <a href="https://github.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.gt}
                            </a>

                            <a href="https://www.instagram.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.ig}
                            </a>

                            <a href="https://www.frontendmentor.io/profile/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                {icons2.fm}
                            </a>
                            <a href="https://www.youtube.com/channel/UCU-0h77SK1LV2VzW6X0qaHg" target="_blank" rel="noopener noreferrer">
                                {icons2.yt}
                            </a>
                        </li>
                    </div>
                </div>

                <div>
                    <GeoLocate />
                </div>
            </div>
        </div>
    )
}

export default Footer