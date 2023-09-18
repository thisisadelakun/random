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
      // Split the text into words
      const words = text.split(' ');
  
      // Initialize variables to keep track of the truncated text and current length
      let truncatedText = '';
      let currentLength = 0;
  
      // Iterate through the words and add them to the truncated text
      for (const word of words) {
        if (currentLength + word.length + 1 <= maxLength) {
          // Add the word and a space to the truncated text
          truncatedText += `${word} `;
          currentLength += word.length + 1; // Include space
        } else {
          // Stop adding words if it exceeds the maxLength
          break;
        }
      }
  
      // Remove the trailing space and add an ellipsis if truncated
      if (truncatedText.length < text.length) {
        truncatedText = truncatedText.trim() + '....';
      }
  
      return truncatedText;
    }
    return text;
  };
  


const LibraryTiles = ({ displayedLibrary }) => {
    const itemsToDisplay = displayedLibrary;

    return (
        <div className='library-tiles-col'>
            {itemsToDisplay.map((item) => (
                <div className="library-tiles" key={item.id}>
                    <NavLink
                        className="library-navlink"
                        to={`/library/${generateSlug('library-' + item.titles)}`}
                        style={{ textDecoration: "none" }}
                    >
                        <small className='post-date'>{item.date}</small>
                        <h3 className='post-title'>{item.titles}</h3>
                        {/* Display the first content */}
                        {item.contents[1] && (
                            <p id='tiles-p' className='content1'>
                                {truncateText(item.contents[1].content, 300)}
                            </p>
                        )}
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default LibraryTiles;