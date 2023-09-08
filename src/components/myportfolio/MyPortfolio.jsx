import React from 'react'
import './MyPortfolio.css'

// import models
import Sendme from '../../models/recurring/Sendme'
import CardComponent from '../../models/card/Card'
import { projectsContents } from '../../models/db/db'

const MyPortfolio = () => {
    return (
        <div className='myportfolio'>
            <div className="myportfolio-col container">
                <div className="myportfolio-header">
                    <h1>{projectsContents.title}</h1>
                    <p>{projectsContents.subTitle}</p>
                </div>
                <div className="myportfolio-main">
                    <div className="portfolio-work">
                        <CardComponent />
                    </div>
                    <div className="send-mess">
                        <Sendme />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio