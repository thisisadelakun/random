import React, { useState, useEffect } from 'react';
import './NavBar.css';

// import models
import { authorInfo, icons } from '../../models/db/db';

// import dependency 
import { NavLink, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeMenu = () => setShow(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasShadow, setHasShadow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the Navbar
        setHasShadow(false);
      } else {
        // Scrolling up, show the Navbar
        setHasShadow(true);
      }

      if (currentScrollPos > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`nav-container ${hasShadow && hasScrolled ? 'shadow show-background' : ''}`}>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className={`mb-2 ${hasShadow ? '' : 'hide-content'}`} >
          <Container fluid>
            <Navbar.Brand>
              <div className='title-logo'>
                <NavLink to="/" style={{ textDecoration: "none" }} className="navLink">
                  <span>{authorInfo.logo1}</span>
                  <span>{authorInfo.logo2}</span>
                  <span>&Aacute;</span>
                </NavLink>
              </div>
            </Navbar.Brand>

            < div
              onClick={handleShow}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className='menu-bar'>
              {icons.cm}
            </ div>

            <Navbar.Offcanvas
              show={show} onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={`offcanvasbgr ${show ? 'show-offcanvas' : ''}`}
              backdrop={false}
            >
              <Offcanvas.Header className="offcanvas-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className='title-logo mobile-view-only'>
                    <NavLink to="/" style={{ textDecoration: "none" }} className="navLink">
                      <span>{authorInfo.logo1}</span>
                      <span>{authorInfo.logo2}</span>
                      <span>&Aacute;</span>
                    </NavLink>
                  </div>
                </Offcanvas.Title>
                <button className="custom-close-button" onClick={handleClose}>
                  {icons.cx}
                </button>
              </Offcanvas.Header>



              <Offcanvas.Body className='canvas-body'>
                <Nav className="justify-content-end flex-grow-1 pe-0">

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
                        My Works
                      </Link>
                    )}
                  </li>
                  <li className="nav-item nav-item-border">
                    {location.pathname !== '/library' && (
                      <Link
                        to="/library"
                        className="nav-link"
                        onClick={() => closeMenu()}
                        exact="true"
                      >
                        Library
                      </Link>
                    )}
                  </li>
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
                      <a className='nav-link' href="mailto:" target="_blank" rel="noopener noreferrer">
                        hello@adelakun.dev
                      </a>
                    </li>
                  </div>

                  <li className='nav-link-socios'>
                    <a href="https://twitter.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                      {icons.tw}
                    </a>

                    <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178/" target="_blank" rel="noopener noreferrer">
                      {icons.in}
                    </a>
                   
                    <a href="https://frontendmentor.io/thisisadelakun" target="_blank" rel="noopener noreferrer">
                      {icons.fm}
                    </a>

                    <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178/" target="_blank" rel="noopener noreferrer">
                      {icons.gt}
                    </a>
                    <a href="https://www.youtube.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                      {icons.yt}
                    </a>

                    <a href="https://www.instagram.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                      {icons.ig}
                    </a>
                    
                  </li>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))
      }
    </div >
  );
};

export default NavBar;