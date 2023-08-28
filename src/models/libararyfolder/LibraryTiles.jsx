import React from 'react'
import '../../components/library/Library.css'
import './LibraryTiles.css'

// import dependencies
import { NavLink } from 'react-router-dom'

// import models
import { myLibrary } from '../db/db2'

function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength);
    }
    return text;
};

const LibraryTiles = ({ numCards }) => {
    const sortedLibrary = myLibrary.sort((a, b) => a.id === 1 ? -1 : b.id === 1 ? 1 : 0);
    const displayedLibrary = sortedLibrary.slice(0, numCards);

    return (
        <div className='library-tiles-col'>
            {displayedLibrary.map((item) => (
                <div className="library-tiles" key={item.id}>
                    <NavLink className="library-navlink" to={`/library/${generateSlug('library-' + item.titles)}`} style={{ textDecoration: "none" }}>
                        <small className='post-date'>{item.date}</small>
                        <h3 className='post-title'>{item.titles}</h3>
                        <p id='tiles-p' className='content1'>{truncateText(item.content1, 300)}...</p>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default LibraryTiles