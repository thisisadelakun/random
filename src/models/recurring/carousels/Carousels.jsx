import React from 'react';
import './Carousels.css'
import Carousel from 'react-bootstrap/Carousel';

// import models
import { images } from '../../db/db';

const Carousels = () => {

    return (
        <div className='carousels'>
            <div className='carousels-col'>
                <Carousel
                    fade
                    controls={false}
                    data-bs-theme="light"
                >
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image.url}
                                alt={`Image ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>

    )
}

export default Carousels