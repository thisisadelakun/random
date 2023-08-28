import React, { useState, useEffect, useRef } from 'react'
import './Home.css'

// import 
import SEO from '../../models/seo/SEO';
import { authorInfo, authorAbout, icons, workContent, libraryContent } from '../../models/db/db';
import CardComponent from '../../models/card/Card';

// import hooks
import Details from '../../hooks/details/Details';

// import dependency 
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import LibraryTiles from '../../models/libararyfolder/LibraryTiles';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);


const Home = () => {
    const [isScrollVisible, setIsScrollVisible] = useState(false);

    useEffect(() => {
        const scrollTimeout = setTimeout(() => {
            setIsScrollVisible(true);
        }, 9000);

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
                                    <h1 className='top-text-h highlight-text'>Web</h1>
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
                                        <img src={authorInfo.bmc} alt="buy-me-coffee" width={16} />
                                    </a>
                                </div>
                            </div>


                            <div className="desktop-view-only scroll-div">
                                {isScrollVisible && (
                                    <Link to="details-col" smooth={true} duration={500} className="scroll">
                                        Scroll Down {icons.adwn}
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
                                        <div className="card__content">
                                            <p className="card__title">
                                                Follow me for more contents:
                                            </p>
                                            <div className="card__description">
                                                <ul>
                                                    <li>
                                                        <a href="https://github.com/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="Github">
                                                            {icons.gt}
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="https://instagram.com/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="Instagram">
                                                            {icons.ig}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="Twitter">
                                                            {icons.tw}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178/"
                                                            target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                                            {icons.in}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://frontendmentor.io/"
                                                            target="_blank" rel="noopener noreferrer">
                                                            {icons.fm}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://frontendmentor.io/thisisadelakun"
                                                            target="_blank" rel="noopener noreferrer" title="YouTube">
                                                            {icons.yt}
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
                                Scroll Down {icons.adwn}
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="page-main" id='page-main'>
                <div className="details-col container" id='details-col'>
                    <Details />
                </div>
            </div>

            <div className="page-main-2">
                <div className="page-about containers">
                    <div className="page-about-text">
                        <h4>Discover <br />the Dev,</h4>
                        <p>
                            {authorAbout.About1Content}
                        </p>

                        <div className="desktop-view-only more-btn">
                            <NavLink to="/meet-me" className="my-button">
                                <span className='my-btn-text'> READ MORE</span> {icons.argt}
                            </NavLink>
                        </div>
                    </div>
                    <div className="page-about-img">
                        <div className="about-img-col"></div>

                        <div className="mobile-view-only more-btn">
                            <NavLink to="/meet-me" className="my-button">
                                <span className='my-btn-text'> READ MORE</span> {icons.argt}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-main">
                <div className="my-work container">
                    <h1 className='container desktop-view-only'>{workContent.homeTitle}</h1>
                    <p className='container desktop-view-only'>{workContent.homeSubtitle}</p>
                    <h1 className='containers mobile-view-only'>{workContent.homeTitle}</h1>
                    <p className='containers mobile-view-only'> {workContent.homeSubtitle}</p>
                    <div className="card_row container">
                        <CardComponent numCards={3} />
                    </div>

                    <div className="more-btn container">
                        <NavLink to="/work-archive" className="my-button-2">
                            <span className='my-btn-text-2'> SEE MORE</span> {icons.argt}
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="page-main-2">
                <div className="my-library containers">
                    <h1 className=''>{libraryContent.homeTitle}</h1>
                    <p className=''>{libraryContent.homeSubtitle}</p>
                    <div className="library_row container">
                        <LibraryTiles numCards={2} />
                    </div>

                    <div className="more-btn">
                        <NavLink to="/library" className="my-button">
                            <span className='my-btn-text'> SEE MORE</span> {icons.argt}
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="page-main">
                <div className="rev-mes">
                    <div className="reviews rev-mes-column">
                        <h1>Reviews</h1>
                        <span>
                            <button>

                            </button>
                        </span>
                    </div>

                    <div className="page-mes rev-mes-column">
                        <h1>Send me <br />a message!</h1>
                        <p>Got a question or proposal, <br />or a review? Go Ahead.</p>

                        <div className="more-btn">
                            <NavLink to="/work-archive" className="my-button-2">
                                <span className='my-btn-text-2'> CONTACT ME</span> {icons.argt}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;