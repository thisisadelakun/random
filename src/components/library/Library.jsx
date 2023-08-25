import React from 'react'
import './Library.css'

// import models
import { myLibrary, newIcons, libraryPage } from '../../models/db/db2';
import LibraryTiles from '../../models/libararyfolder/LibraryTiles';

// import dependencies;


const Library = () => {
    return (
        <div className='library-col'>
            <div className="library-page containers">
                <div className="lib-page-header">
                    <h1>{libraryPage.title}</h1>
                    <p>{libraryPage.subTitle}</p>
                </div>
                <LibraryTiles />
            </div>
        </div>
    )
}

export default Library