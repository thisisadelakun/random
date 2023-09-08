import React from 'react'
import './ContactMe.css'

// import models
import { contactContent, icons, authorInfo } from '../../models/db/db'
import ContactForm from '../../models/forms/contactform/ContactForm'
import Faq from '../../models/recurring/faq/Faq'
import SEO from '../../models/seo/SEO'

const ContactMe = () => {
    return (
        <div className='contact_me'>
            <SEO
                title="Contact Page | Adelakun's Portfolio"
                description="Contact Page"
                name="Web Developer Portfolio"
                type='Portfolio'
            />

            <div className="contact_me_col containers">
                <div className="contact_me_col_headers">
                    <h1>{contactContent.title}</h1>
                    <p>{contactContent.subTitle}</p>
                </div>

                <div className="contact_me_col_main">
                    <h3>{contactContent.mainTitle}</h3>
                    <p>{contactContent.mainSubTitle1}</p>

                    <div className="contact_grid">
                        <div className="contact-left">
                            <p>{contactContent.leftTitle}</p>
                            <div className="contact-left-content">
                                <ContactForm />
                            </div>
                        </div>

                        <div className="contact-right">
                            <p>{contactContent.rightTitle}</p>

                            <div className="contact-right-content">
                                <div className="contact-email">
                                    <a href={`mailto:${authorInfo.email}`}>
                                        {authorInfo.email}
                                    </a>
                                </div>

                                <div className="find-me">
                                    <span>{contactContent.find}:</span>
                                </div>

                                <div className="contact-socios">
                                    <a href="https://twitter.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                        {icons.tw} Twitter
                                    </a>

                                    <a href="https://www.instagram.com/thisisadelakun" target="_blank" rel="noopener noreferrer">
                                        {icons.ig} Instagram
                                    </a>

                                    <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178/" target="_blank" rel="noopener noreferrer">
                                        {icons.in} LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <Faq />
                </div>
            </div>
        </div>
    )
}

export default ContactMe