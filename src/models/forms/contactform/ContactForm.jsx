import React, { useState } from 'react'
import './ContactForm.css'

// import hooks
import { firestore } from '../../../hooks/firebase/firebase';

// import models
import { icons2, contactContent } from '../../db/db';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailPlaceholderVisible, setEmailPlaceholderVisible] = useState(true);
    const [isNamePlaceholderVisible, setNamePlaceholderVisible] = useState(true);
    const [isSubjectPlaceholderVisible, setSubjectPlaceholderVisible] = useState(true);
    const [isMessagePlaceholderVisible, setMessagePlaceholderVisible] = useState(true);

    const handleEmailFocus = () => {
        if (email === '') {
            setEmailPlaceholderVisible(false);
        }
    };

    const handleEmailBlur = () => {
        if (email === '') {
            setEmailPlaceholderVisible(true);
        }
    };

    const handleNameFocus = () => {
        if (name === '') {
            setNamePlaceholderVisible(false);
        }
    };

    const handleNameBlur = () => {
        if (name === '') {
            setNamePlaceholderVisible(true);
        }
    };

    const handleSubjectFocus = () => {
        if (subject === '') {
            setSubjectPlaceholderVisible(false);
        }
    };

    const handleSubjectBlur = () => {
        if (subject === '') {
            setSubjectPlaceholderVisible(true);
        }
    };

    const handleMessageFocus = () => {
        if (message === '') {
            setMessagePlaceholderVisible(false);
        }
    };

    const handleMessageBlur = () => {
        if (message === '') {
            setMessagePlaceholderVisible(true);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const contactFormRef = firestore.collection('contactForm'); // Replace with your collection name
            await contactFormRef.add({
                name,
                email,
                subject,
                message,
                timestamp: new Date(),
            });

            alert('Message Sent Successfully!');
            setName(''); // Clear the name input after submission
            setEmail(''); // Clear the email input after submission
            setSubject(''); // Clear the subject input after submission
            setMessage(''); // Clear the message input after submission
        } catch (error) {
            alert('Error Sending Message. Please try again.');
        }
    };

    return (
        <div className='contact_form'>
            <form className='contact-form-col' action="" method="post" onSubmit={handleFormSubmit}>
                <div className="your-name contact_form_row">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={isNamePlaceholderVisible ? 'Enter your name' : ''}
                        onFocus={handleNameFocus}
                        onBlur={handleNameBlur}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="your-email contact_form_row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={isEmailPlaceholderVisible ? 'Enter your email address' : ''}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailBlur}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="your-subject contact_form_row">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder={isSubjectPlaceholderVisible ? 'e.g., Web development' : ''}
                        onFocus={handleSubjectFocus}
                        onBlur={handleSubjectBlur}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className="your-message contact_form_row">
                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        id='message'
                        placeholder={isMessagePlaceholderVisible ? contactContent.messagePH : ''}
                    onFocus={handleMessageFocus}
                    onBlur={handleMessageBlur}
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                </div>

                <button type="submit">Send {icons2.send}</button>
            </form>
        </div>
    )
}

export default ContactForm