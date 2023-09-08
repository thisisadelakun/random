import React from 'react'
import './ContactForm.css'

// import hooks
import { firestore } from '../../../hooks/firebase';

// import models
import { icons2 } from '../../db/db';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

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
            <form action="" method="post" onSubmit={handleFormSubmit}>
                <div className="your-name">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="your-email">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="your-subject">
                    <label htmlFor="subject"></label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className="your-message">
                    <label htmlFor="message"></label>
                    <input
                        type="text"
                        name="message"
                        id='message'
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