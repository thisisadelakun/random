import React from 'react'
import { authorDetails } from '../../models/db/db'
import './Details.css'

const Details = () => {
    return (
        <div className='details'>
            <div className="details-left">
                <div className="details-text">
                    <h3>{authorDetails.Detail1Title}</h3>
                    <p>{authorDetails.Detail1Content}</p>
                </div>
                <div className="detail-space1 desktop-view-only"></div>
            </div>

            <div className="details-right">
                <div className="detail-space2 desktop-view-only"></div>
                <div className="details-text">
                    <h3>{authorDetails.Detail2Title}</h3>
                    <p>{authorDetails.Detail2Content}</p>
                </div>
            </div>

            <div className="details-left">
                <div className="details-text">
                    <h3>{authorDetails.Detail3Title}</h3>
                    <p>{authorDetails.Detail3Content}</p>
                </div>
                <div className="detail-space3 desktop-view-only"></div>
            </div>
        </div>
    )
}

export default Details