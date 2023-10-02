import {useState, useEffect} from 'react'

export const useTime = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    })

    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    let formattedDate = time.toLocaleDateString('en-US', options);
    const formattedTime = time.toLocaleTimeString([], { hour12: false, hour: 'numeric', minute: 'numeric' });

    // remove , from date
    const dateArr = formattedDate.split(',');
    const dateStr = dateArr.join("");
    formattedDate = dateStr.trim();

    return [formattedDate, formattedTime];
}