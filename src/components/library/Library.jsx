import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Library.css'

// import models
import { libraryPage, myLibrary } from '../../models/db/db2';
import LibraryTiles from '../../models/libararyfolder/LibraryTiles';
import SEO from '../../models/seo/SEO';

const ITEMS_PER_PAGE = 10;

const Library = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(myLibrary.length / ITEMS_PER_PAGE);

    const location = useLocation(); // Get the current location

    // Use useEffect to scroll to the top whenever the location (route) changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    }, [location]);

    const handlePageClick = (pageNumber) => {
        // When the page number changes, setCurrentPage will trigger a re-render
        setCurrentPage(pageNumber);
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={currentPage === i ? 'active' : ''}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayedLibrary = myLibrary.slice(startIndex, endIndex);

    return (
        <div className='library-col'>
            <SEO
                title="Blog | Adelakun's Portfolio"
                description="Portfolio's Blog Page"
                name="Web Developer Portfolio"
                type='Portfolio'
            />
            <div className="library-page containers">
                <div className="lib-page-header">
                    <h1>{libraryPage.title}</h1>
                    <p>{libraryPage.subTitle}</p>
                </div>
                <LibraryTiles displayedLibrary={displayedLibrary} />
                <div className="pagination">
                    {getPageNumbers()}
                </div>
            </div>
        </div>
    );
}

export default Library;