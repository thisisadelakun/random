import React from 'react'

// import dependencies
import { NavLink } from 'react-router-dom'

const LibararyTiles = () => {
    return (
        <div className='library-tiles-col'>
            <div className="library-tiles">
                <NavLink style={{ textDecoration: "none" }}>
                    <small className='tiles-date'></small>
                    <h3 className='tiles-title'></h3>
                </NavLink>
            </div>
        </div>
    )
}

export default LibararyTiles