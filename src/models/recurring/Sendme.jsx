import React from 'react'
import '../../components/home/Home.css'
import { NavLink } from 'react-router-dom'

//import models
import { icons } from '../db/db'

const Sendme = () => {
    return (
        <div className="page-mes rev-mes-column">
            <h3>Send me <br />a message!</h3>
            <p>Got a question or proposal, <br />or a review? Go Ahead.</p>

            <div className="more-btn">
                <NavLink to="/contact-me" className="my-button-2">
                    <span className='my-btn-text-2'> CONTACT ME</span> {icons.argt}
                </NavLink>
            </div>
        </div>
    )
}

export default Sendme