import React, { useState } from 'react';
import './Newsletter.css'

// import models
import { firestore } from '../../../hooks/firebase/firebase';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const newsletterRef = firestore.collection('newsletterSubscribers'); // Replace with your collection name
            await newsletterRef.add({
                email,
                timestamp: new Date(),
            });

            alert('Subscribed successfully!');
            setEmail(''); // Clear the email input after submission
        } catch (error) {
            alert('Error subscribing. Please try again.');
        }
    };

    return (
        <div>
            <div className="newsletter-col">
                <div className="news-letter-hd">
                    <h1>
                        Subscribe to <br /> the Newsletter
                    </h1>
                </div>
                <div className="news-letter-form">
                    <form onSubmit={handleFormSubmit} className='ltr-form form-col'>
                        <label htmlFor="email">Email</label>
                        <div className='email-form'>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                placeholder="email@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter