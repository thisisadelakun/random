import React from 'react';
import './Library.css'

// import models
import { myLibrary, newIcons } from '../../models/db/db2';

// import dependencies
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}

const LibraryDetail = () => {
    const { slug } = useParams();
    const selectedItem = myLibrary.find(item => generateSlug('library-' + item.titles) === slug);

    if (!selectedItem) {
        return <div>Item not found.</div>;
    }

    return (
        <div className='library-detail'>
            <div className="library containers" key={selectedItem.id}>
                <div className='post-heading'>
                    <span className='post-date'>{selectedItem.date}</span>
                    <span className='post-read'>{selectedItem.read}</span>
                </div>

                <div className='post-body'>
                    <div className='post-body-header'>
                        <h1 className='post-title'>{selectedItem.titles}: <br /> {selectedItem.content1Title}</h1>
                    </div>

                    <div className='post-body-main'>
                        {selectedItem.content1 && (<p className='content1'>{selectedItem.content1}</p>)}

                        {selectedItem.content2Title && (<h3 className='content2Title'>{selectedItem.content2Title}</h3>)}
                        {selectedItem.content2 && (<p className='content2'>{selectedItem.content2}</p>)}

                        {selectedItem.content3Title && (<h3 className='content3Title'>{selectedItem.content3Title}</h3>)}
                        {selectedItem.content3 && (<p className='content3'>{selectedItem.content3}</p>)}

                        {selectedItem.content4Title && (<h3 className='content4Title'>{selectedItem.content4Title}</h3>)}
                        {selectedItem.content4 && (<p className='content4'>{selectedItem.content4}</p>)}

                        {selectedItem.content5Title && (<h3 className='content5Title'>{selectedItem.content5Title}</h3>)}
                        {selectedItem.codeSnippetTitle5 && (<p className='codeSnippetTitle5'>{selectedItem.codeSnippetTitle5}</p>)}
                        {selectedItem.codeSnippet5 && (
                            <div className='codeSnippetContainer codeSnippet5'>
                                <SyntaxHighlighter language={selectedItem.codeSnippetLanguage} style={dark}>
                                    {selectedItem.codeSnippet5}
                                </SyntaxHighlighter>
                            </div>
                        )}
                        {selectedItem.content5 && (<p className='content5'>{selectedItem.content5}</p>)}

                        {selectedItem.content6Title && (<h3 className='content6Title'>{selectedItem.content6Title}</h3>)}
                        {selectedItem.content6 && (<p className='content6'>{selectedItem.content6}</p>)}
                        {selectedItem.codeSnippetTitle6 && (<p className='codeSnippetTitle6'>{selectedItem.codeSnippetTitle6}</p>)}
                        {selectedItem.codeSnippet6 && (
                            <div className='codeSnippetContainer codeSnippet6'>
                                <SyntaxHighlighter language={selectedItem.codeSnippetLanguage} style={dark}>
                                    {selectedItem.codeSnippet6}
                                </SyntaxHighlighter>
                            </div>
                        )}

                        {selectedItem.content7Title && (<h3 className='content7Title'>{selectedItem.content7Title}</h3>)}
                        {selectedItem.content7 && (<p className='content7'>{selectedItem.content7}</p>)}

                        {selectedItem.content8Title && (<h3 className='content8Title'>{selectedItem.content8Title}</h3>)}
                        {selectedItem.content8 && (<p className='content8'>{selectedItem.content8}</p>)}

                        {selectedItem.content9Title && (<h3 className='content9Title'>{selectedItem.content9Title}</h3>)}
                        {selectedItem.content9 && (<p className='content9'>{selectedItem.content9}</p>)}

                    </div>

                    <div className='post-footer'>
                        <div className="further-col">
                            {selectedItem.futherTitle && (<h3 className='further-reading'>{selectedItem.futherTitle}</h3>)}
                            {selectedItem.furthercontent && (<p className='content9'>{selectedItem.furthercontent}</p>)}
                            <ol>
                                <li>
                                    {selectedItem.furtherlinkTitle1 && (<a href={selectedItem.furtherlink1} target="_blank"
                                        rel="noopener noreferrer"
                                        className='further-links1'>{selectedItem.furtherlinkTitle1} -
                                    </a>)}
                                    {selectedItem.furtherlinkContent1 && (<><span className='furtherlinkContent1'>
                                        {selectedItem.furtherlinkContent1}
                                    </span></>)}
                                </li>

                                <li>
                                    {selectedItem.furtherlinkTitle2 && (<a href={selectedItem.furtherlink2} target="_blank"
                                        rel="noopener noreferrer"
                                        className='further-links2'>{selectedItem.furtherlinkTitle2} -
                                    </a>)}
                                    {selectedItem.furtherlinkContent2 && (<span className='furtherlinkContent2'>
                                        {selectedItem.furtherlinkContent2}
                                    </span>)}
                                </li>
                                <li>
                                    {selectedItem.furtherlinkTitle3 && (<a href={selectedItem.furtherlink3} target="_blank"
                                        rel="noopener noreferrer"
                                        className='further-links3'>{selectedItem.furtherlinkTitle3} -
                                    </a>)}
                                    {selectedItem.furtherlinkContent3 && (<span className='furtherlinkContent3'>
                                        {selectedItem.furtherlinkContent3}
                                    </span>)}
                                </li>
                            </ol>
                        </div>

                        <div className='library-tags'>
                            <span className='tag1'>Tags:</span>
                            <span className='tag2'> {selectedItem.tag1}, {selectedItem.tag2}</span>
                        </div>
                    </div>
                </div>

                <div className="library-buttons">
                    <button id='prev'>{newIcons.arlft} PREV</button>
                    <button id='menu'>{newIcons.menu}</button>
                    <button id='next'>NEXT {newIcons.arght}</button>
                </div>
            </div>
        </div>
    );
}

export default LibraryDetail;
