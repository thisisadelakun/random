import React from 'react'
import './ContactMe.css'

// import models
import { contactContent, icons2 } from '../../models/db/db'
import ContactForm from '../../models/forms/contactform/ContactForm'

const ContactMe = () => {
    return (
        <div className='contact_me'>
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
                            <ContactForm />
                        </div>

                        <div className="contact-right">
                            <p>{contactContent.rightTitle}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactMe