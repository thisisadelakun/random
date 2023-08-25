import React from 'react'
import './Library.css'

// import dependencies
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Library = () => {
    return (
        <div className='library-col'>
            <div className="library">
                
                <SyntaxHighlighter language="html" style={dark}>
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Library