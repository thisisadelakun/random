import React, { useState, useEffect, useRef } from 'react'
import SEO from '../../models/seo/SEO';
import './Home.css'
import { authorInfo } from '../../models/db/db';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaCodepen } from 'react-icons/fa'
import { SiFrontendmentor } from 'react-icons/si'
import { LuArrowDownWideNarrow } from 'react-icons/lu'
import Details from '../../hooks/details/Details';


const Home = () => {
    const [isScrollVisible, setIsScrollVisible] = useState(false);

    useEffect(() => {
        const scrollTimeout = setTimeout(() => {
            setIsScrollVisible(true);
        }, 7000);

        return () => {
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <div>
            <SEO
                title="Home Page | Adelakun's Portfolio"
                description='Portfolio Home page.'
                name='Web Developer Portfolio'
                type='Portfolio'
            />

            <div className="page-1">
                <div className="page-header">
                    <div className="bio-title containers">
                        <div className="header-animated-txt">
                            <div className="top-text">
                                <div className='top-text-col'>
                                    <small className='top-text-sm'>»»</small>
                                    <h1 className='top-text-h highlight-text'>Web & Mobile</h1>
                                    <h1 className='top-text-h highlight-text'>Developer<span className='extras-1'>.</span></h1>
                                </div>
                            </div>
                            <div className="bottom-text">
                                <div className='bottom-text-col'>
                                    <span className='bottom-text-span'>
                                        {authorInfo.jobDescription}
                                    </span>
                                    <a href="https://www.buymeacoffee.com/thisisadelakun"
                                        target="_blank" rel="noopener noreferrer" className='shaking-link'
                                        title="Buy me a coffee.">
                                        <img src={authorInfo.bmc} alt="buy-me-coffee" width={16} />🍕
                                    </a>
                                </div>
                            </div>


                            <div className="desktop-view-only scroll-div">
                                {isScrollVisible && (
                                    <Link to="details-col" smooth={true} duration={500} className="scroll">
                                        Scroll Down <LuArrowDownWideNarrow className="arrow-scroll-dw" />
                                    </Link>
                                )}
                            </div>

                        </div>

                        <div className="page-1-right-col">
                            <div className="header-image">
                                <div className="border-image"></div>
                                <div className="header-img-col">
                                    <div className="header-card-col">
                                        <img src={authorInfo.profilepic} alt={authorInfo.lastName} width={224} height={240} />
                                        <div class="card__content">
                                            <p class="card__title">
                                                Follow me for more contents:
                                            </p>
                                            <div class="card__description">
                                                <ul>
                                                    <li>
                                                        <a href="https://github.com/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="Github">
                                                            <FaGithub className='card-icon-gt' />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="https://instagram.com/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="Instagram">
                                                            <FaInstagram className='card-icon-ig' />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="Twitter">
                                                            <FaTwitter className='card-icon-tw' />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178/"
                                                            target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                                            <FaLinkedin className='card-icon-in' />

                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://frontendmentor.io/"
                                                            target="_blank" rel="noopener noreferrer">
                                                            <SiFrontendmentor className='card-icon-fem' title="Frontend Mentor" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://frontendmentor.io/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="YouTube">
                                                            <FaYoutube className='card-icon-yt' />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-view-only scroll-div">
                        {isScrollVisible && (
                            <Link to="details-col" smooth={true} duration={500} className="scroll">
                                Scroll Down <LuArrowDownWideNarrow className="arrow-scroll-dw" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* <div className="page-main-bgr"></div> */}
            <div className="page-main animated-element" id='page-main'>

                <div className="details-col containers" id='details-col'>
                    <Details />
                </div>
                <div className="details-col containers" id='details-col'>
                    <Details />
                </div>
                <div className="details-col containers" id='details-col'>
                    <Details />
                </div>
                <div className="details-col containers" id='details-col'>
                    <Details />
                </div>
                <div className="details-col containers" id='details-col'>
                    <Details />
                </div>

                <div className="page-about"></div>
                <div className="page-work"></div>
                <div className="page-library"></div>
                <div className="reviews"></div>
            </div>
        </div>
    );
};

export default Home;