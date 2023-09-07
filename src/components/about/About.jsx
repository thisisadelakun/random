import React from 'react'
import './About.css'

// import depenedencies
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

// import models
import { authorInfo, authorAbout, authorAboutContent, mySkills, myFaq, myFaqContent } from '../../models/db/db'
import SEO from '../../models/seo/SEO'

const About = () => {
    return (
        <div className='about-me-col'>

            <SEO
                title="About | Adelakun's Portfolio"
                description="Portfolio's About Page"
                name="Web Developer Portfolio"
                type='Portfolio'
            />

            <div className="about-me containers">
                <div className="about-me-headers">
                    <h1>{authorAboutContent.title}</h1>
                    <p>{authorAboutContent.subTitle}</p>
                </div>

                <div className="about-me-main">
                    <div className="about-me-main1">
                        <div className="about-me-left">

                            <div className="prgh-1 mobile-view-only">
                                <div className="carouse">
                                    <Carousel className='carouse-col' fade controls={false}>
                                        <Carousel.Item>
                                            <img src={authorInfo.profilepic} alt={authorInfo.lastName} width={224} height={240} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={authorInfo.profilepic2} alt={authorInfo.lastName} width={224} height={240} />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div>
                                    <p>PERSONAL DETAILS</p>
                                </div>
                            </div>

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
                        <div className="about-me-right desktop-view-only">



                            <div className="carouse">
                                <Carousel className='carouse-col' fade controls={false}>
                                    <Carousel.Item>
                                        <img src={authorInfo.profilepic} alt={authorInfo.lastName} width={224} height={240} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={authorInfo.profilepic2} alt={authorInfo.lastName} width={224} height={240} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                            <div>
                                <p>PERSONAL DETAILS</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-me-main2">
                        <div className="skills">
                            <h3>My Skills</h3>
                            <div className="skills-main-col">
                                {mySkills.map((skillsGroup, index) => (
                                    <div className={`skills-col ${skillsGroup.skillsTitle.toLowerCase()}`} key={index}>
                                        <p>{skillsGroup.skillsTitle}</p>
                                        <ul>
                                            {Object.values(skillsGroup)
                                                .slice(2) // Skip id and skillsTitle
                                                .filter(skill => skill) // Filter out undefined skills
                                                .map((skill, skillIndex) => (
                                                    <li key={skillIndex}>{skill}</li>
                                                ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-me-footer">
                    <div className="about-me-footer-header">
                        <h3>{myFaqContent.title}</h3>
                    </div>
                    <div className="accrd container">
                        <Accordion>
                            {myFaq.map((faqItem, index) => (
                                <Accordion.Item className='accrd-col shadow' key={index} eventKey={index.toString()}>
                                    <Accordion.Header className="accordion-header">
                                        {faqItem.faqTitle}
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p>{faqItem.faq1}</p>
                                        {faqItem.faq2 && <p>{faqItem.faq2}</p>}
                                        {faqItem.faq3 && <p>{faqItem.faq3}</p>}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About