import React from 'react';
import './Library.css';

// import models
import { myLibrary, newIcons } from '../../models/db/db2';
import { icons } from '../../models/db/db';
import Newsletter from '../../models/forms/newsletter/Newsletter';
import SEO from '../../models/seo/SEO';

// import dependencies
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}

const LibraryDetail = () => {
    const { slug } = useParams();
    const selectedItem = myLibrary.find(item => generateSlug('library-' + item.titles) === slug);
    const selectedItemIndex = myLibrary.findIndex(item => generateSlug('library-' + item.titles) === slug);
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const posttitle = queryParams.get('tag');

    if (!selectedItem) {
        return <div>Item not found.</div>;
    }

    const handleTagClick = (tag) => {
        navigate(`/filtered-library?tag=${tag}`);
    };

    const navigateToItem = (index) => {
        const newIndex = (selectedItemIndex + index + myLibrary.length) % myLibrary.length;
        const newSlug = generateSlug('library-' + myLibrary[newIndex].titles);
        navigate(`/library/${newSlug}`);
    };

    const renderContentSections = () => {
        const contentSections = [];

        if (selectedItem) {
            console.log('selectedItem:', selectedItem);
            if (selectedItem.contents && Array.isArray(selectedItem.contents)) {
                console.log('Contents:', selectedItem.contents);
                selectedItem.contents.forEach((content, index) => {
                    console.log('Rendering content:', content);
                    // Your existing code for rendering content sections here...
                    contentSections.push(
                        <div className={`details-prgh content${index + 1}Container`} key={content.title}>
                            {content.title && (
                                <h3 className={`content${index + 1}Title`}>{content.title}</h3>
                            )}
                            {content.subTitle && (
                                <span>{content.subTitle}</span>
                            )}
                            {content.content && (
                                <p className={`content${index + 1}`}>{content.content}</p>
                            )}
                            {content.codeSnippets.map((codeSnippet, snippetIndex) => (
                                <div className={`codeSnippetContainer codeSnippet${index + 1}-${snippetIndex}`} key={snippetIndex}>
                                    {codeSnippet.title && (
                                        <p className={`codeSnippetTitle${index + 1}-${snippetIndex}`}>
                                            {codeSnippet.title}
                                        </p>
                                    )}
                                    {codeSnippet.snippet && (
                                        <div className="syntax_col">
                                            <SyntaxHighlighter className="syntax_col" language={codeSnippet.language} style={dark}>
                                            {codeSnippet.snippet}
                                        </SyntaxHighlighter>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    );
                });
            }
        }

        return contentSections;
    };



    const isPrevButtonVisible = selectedItemIndex > 0;
    const isNextButtonVisible = selectedItemIndex < myLibrary.length - 1;

    return (
        <div className='library-detail'>
            <SEO
                title={`${selectedItem.titles} | Adelakun's Portfolio`}
                description={selectedItem.content1Title}
                name="Web Developer Portfolio"
                type='Portfolio'
            />

            <div className="library containers" key={selectedItem.id}>
                <div className='post-heading'>
                    <span className='post-date'>{selectedItem.date}</span>
                    <span className='post-read'>{selectedItem.read}</span>
                </div>

                <div className='post-body'>
                    <div className='post-body-header'>
                        <h1 className='post-title'>{selectedItem.titles}: <br /> {selectedItem.subTitles}</h1>
                    </div>

                    <div className='post-body-main'>
                        {renderContentSections()}
                    </div>

                    <div className='post-footer'>
                        <div className="further-col">
                            {selectedItem.futherTitle && (<h3 className='further-reading'>{selectedItem.futherTitle}</h3>)}
                            {selectedItem.furthercontent && (<p className='content9'>{selectedItem.furthercontent}</p>)}
                            <ol>
                                {selectedItem.furtherlinkTitle1 && (
                                    <li>
                                        <a href={selectedItem.furtherlink1} target="_blank"
                                            rel="noopener noreferrer"
                                            className='further-links1'>{selectedItem.furtherlinkTitle1} -
                                        </a>
                                        {selectedItem.furtherlinkContent1 && (<><span className='furtherlinkContent1'>
                                            {selectedItem.furtherlinkContent1}
                                        </span></>)}
                                    </li>
                                )}

                                {selectedItem.furtherlinkTitle2 && (
                                    <li>
                                        <a href={selectedItem.furtherlink2} target="_blank"
                                            rel="noopener noreferrer"
                                            className='further-links2'>{selectedItem.furtherlinkTitle2} -
                                        </a>
                                        {selectedItem.furtherlinkContent2 && (<span className='furtherlinkContent2'>
                                            {selectedItem.furtherlinkContent2}
                                        </span>)}
                                    </li>
                                )}

                                {selectedItem.furtherlinkTitle3 && (
                                    <li>
                                        <a href={selectedItem.furtherlink3} target="_blank"
                                            rel="noopener noreferrer"
                                            className='further-links3'>{selectedItem.furtherlinkTitle3} -
                                        </a>
                                        {selectedItem.furtherlinkContent3 && (<span className='furtherlinkContent3'>
                                            {selectedItem.furtherlinkContent3}
                                        </span>)}
                                    </li>
                                )}
                            </ol>
                        </div>

                        <div className="tag-n-share">
                            <div className='library-tags'>
                                <span className='tag1'>Tags:</span>
                                <span className='tag2'>
                                    {selectedItem.tags && selectedItem.tags.map(tag => (
                                        <button
                                            key={tag}
                                            className='tag-button'
                                            onClick={() => handleTagClick(tag)}
                                            style={{ padding: "0 5px" }}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </span>
                            </div>

                            <div className="share-buttons">
                                <TwitterShareButton className='share-hover' url={window.location.href} title={selectedItem.titles}>
                                    {icons.tw}
                                </TwitterShareButton>
                                <FacebookShareButton className='share-hover' url={window.location.href} quote={selectedItem.titles}>
                                    {icons.fb}
                                </FacebookShareButton>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="library-buttons">
                    {isPrevButtonVisible && (
                        <button id='prev' onClick={() => navigateToItem(-1)}>{newIcons.arlft} PREV</button>
                    )}
                    <button id='menu' onClick={() => navigate('/library')}>{newIcons.menu}</button>
                    {isNextButtonVisible && (
                        <button id='next' onClick={() => navigateToItem(1)}>NEXT {newIcons.arght}</button>
                    )}
                </div>

                <div className="subscribe">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
}

export default LibraryDetail;
