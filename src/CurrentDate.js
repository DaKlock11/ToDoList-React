import React, {useEffect, useState} from 'react';
import './CurrentDate.css';

export const CurrentDate = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div className="currentDate">
            <div>Time: {date.toLocaleTimeString()}</div>
            <div>Date: {date.toLocaleDateString()}</div>
        </div>
    )
}
export default CurrentDate;