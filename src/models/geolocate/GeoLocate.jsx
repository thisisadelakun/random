import React, { useEffect, useState } from 'react';

const GeoLocate = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div className="device-time">
                <p>{currentTime.toLocaleTimeString()}</p>
            </div>
        </div>
    )
}

export default GeoLocate