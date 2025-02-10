import React, { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds} ${meridiem}`;
    }

    return (<>
        <p className="p">SIMPLE DIGITAL CLOCK</p>
        <div className="clock-container">
            <div className="clock">
                <span className="span"> {formatTime()} </span>
            </div> 
        </div>
    </>);
}

export default DigitalClock;
