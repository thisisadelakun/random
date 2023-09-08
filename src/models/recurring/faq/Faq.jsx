import React from 'react'
import '../../../components/about/About.css'

// import depenedencies
import Accordion from 'react-bootstrap/Accordion';
// import models
import { myFaq2, myFaqContent } from '../../db/db'

const Faq = () => {
    return (
        <div className='faq'>
            <div className="faq-col">
                <div className="about-me-footer">
                    <div className="about-me-footer-header">
                        <h3>{myFaqContent.title}</h3>
                    </div>
                    <div className="accrd container">
                        <Accordion>
                            {myFaq2.map((faqItem, index) => (
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

export default Faq