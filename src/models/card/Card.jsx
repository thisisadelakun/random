import React from 'react';
import './Card.css';

// import dependencies
import Card from 'react-bootstrap/Card';

// import models
import { projects, icons } from '../db/db';

const CardComponent = ({ numCards }) => {
    const sortedProjects = projects.sort((a, b) => a.id === 1 ? -1 : b.id === 1 ? 1 : 0);
    const displayedProjects = sortedProjects.slice(0, numCards);

    return (
        <div className="card_col">
            {displayedProjects.map(project => (
                <Card key={project.id} className="work_card" style={{ width: '18rem', height: "23rem" }}>
                    <div className="top-section" style={{ backgroundImage: `url(${project.backgroundImage})`, filter: 'brightness()' }}>
                        <div className="top-border"></div>
                        <div className="icons">
                            <div className="social-media">
                                {project.catIcon}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <span className="card_title" id='projectTitle'>{project.projectTitle}</span>
                        <div className="card_sub_title">
                            <span className='ht pro-svg'>{project.ht}</span>
                            <span className='css pro-svg'>{project.css}</span>
                            <span className='jv pro-svg'>{project.jv}</span>
                            <span className='js pro-svg'>{project.js}</span>
                            <span className='ts pro-svg'>{project.ts}</span>
                            <span className='rjs pro-svg'>{project.rjs}</span>
                            <span className='cd pro-svg'>{project.cd}</span>
                            <span className='py pro-svg'>{project.py}</span>
                            <span className='dj pro-svg'>{project.dj}</span>
                            <span className='wp pro-svg'>{project.wp}</span>
                            <span className='bs pro-svg'>{project.bs}</span>
                        </div>
                        <div className="card_row">
                            <div className="item-up">
                                <span className="big-text">
                                    {project.projectContent}
                                </span>
                            </div>
                            <div className="item-down">
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className='live' id='live'>
                                    Go Live {icons.link}
                                </a>
                                <a href={project.source} target="_blank" rel="noopener noreferrer" className='source' id='source'>
                                    Source {icons.link}
                                </a>
                            </div>

                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default CardComponent;
