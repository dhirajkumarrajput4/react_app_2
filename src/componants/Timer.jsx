import React, { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log("adding interval ");
        const timmer = setInterval(() => setTime(time + 1), 1000);

        return function(){
            console.log("clear interval")
            clearInterval(timmer);
        }
    }, [time]);

    return (
        <div>
            <h3>Stop Watch</h3>
            <p>Current Time is : {time}</p>
        </div>
    );

};
export default Timer;