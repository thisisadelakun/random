import React from 'react'
import '../../components/library/Library.css'
import './LibraryTiles.css'

// import dependencies
import { NavLink } from 'react-router-dom'

function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}

const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
        return text.slice(0, maxLength);
    }
    return text;
};


const LibraryTiles = ({ displayedLibrary }) => {
    const itemsToDisplay = displayedLibrary;

    return (
        <div className='library-tiles-col'>
            {itemsToDisplay.map((item) => (
                <div className="library-tiles" key={item.id}>
                    <NavLink className="library-navlink" to={`/library/${generateSlug('library-' + item.titles)}`} style={{ textDecoration: "none" }}>
                        <small className='post-date'>{item.date}</small>
                        <h3 className='post-title'>{item.titles}</h3>
                        <p id='tiles-p' className='content1'>{truncateText(item.content1, 300)}...</p>
                    </NavLink>
                </div>
            ))}
        </div>
    );
}

export default LibraryTiles;