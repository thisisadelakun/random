import React from 'react'
import './About.css'

// import models
import { authorAbout, authorAboutContent } from '../../models/db/db'

const About = () => {
    return (
        <div className='about-me-col'>
            <div className="about-me containers">
                <div className="about-me-headers">
                    <h1>{authorAboutContent.title}</h1>
                    <p>{authorAboutContent.subTitle}</p>
                </div>

                <div className="about-me-main">
                    <div className="about-me-main1">
                        <div className="prgh">
                            <p>{authorAbout.AboutMain1Content}</p>
                        </div>

                        <div className="prgh">
                            <p>{authorAbout.AboutMain2Content}</p>
                        </div>

                        <div className="prgh">
                            <p>{authorAbout.AboutMain3Content}</p>
                        </div>
                    </div>
                </div>

                <div className="about-me-footer"></div>
            </div>
        </div>
    )
}

export default About