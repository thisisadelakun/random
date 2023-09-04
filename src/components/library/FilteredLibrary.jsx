import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Library.css'

// import models
import { myLibrary, newIcons } from '../../models/db/db2';
import LibraryTiles from '../../models/libararyfolder/LibraryTiles';
import SEO from '../../models/seo/SEO';

const ITEMS_PER_PAGE = 10;

const FilteredLibrary = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tag = queryParams.get('tag');

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages based on the filtered items
    const filteredItems = myLibrary.filter(item => item.tags && item.tags.some(t => t.toLowerCase().startsWith(tag.toLowerCase())));
    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const handlePageClick = (pageNumber) => {
        // Scroll to the top when navigating to a new page
        window.scrollTo({
            top: 0,
            behavior: 'auto', // or 'smooth' for smooth scroll
        });

        setCurrentPage(pageNumber);
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = Math.min(10, totalPages); // Show a maximum of 10 pages

        for (let i = 1; i <= maxPagesToShow; i++) {
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

    // If tag is not present, return an empty list
    if (!tag) {
        return (
            <div className='filtered-library-col'>
                <div className="filtered-library containers">Tag not found.</div>
            </div>
        );
    }

    const itemsToDisplay = filteredItems.slice(startIndex, endIndex);

    return (
        <div className="filtered-library-col">
            <SEO
                title={`Library | ${tag}`}
                description="Portfolio's Blog Page"
                name="Web Developer Portfolio"
                type='Portfolio'
            />

            <div className="filtered-library containers">
                <h1>SHELF - #{tag}</h1>
                <Link to="/library">{newIcons.arlft} return</Link>
                <LibraryTiles displayedLibrary={itemsToDisplay} />

                <div className="pagination">
                    {getPageNumbers()}
                </div>
            </div>
        </div>
    );
};

export default FilteredLibrary;