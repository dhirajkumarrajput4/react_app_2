import React, { useEffect, useState } from "react";

const MyComponant = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log("myCompnant is mounting.........");

    }, []);

    useEffect(() => {
        console.log("Count is updated.....",count,count2);

        return function(){
            console.log("returning count.....",count,count2)
        }
    }, [count,count2]);

    return (
        <div>
            <p>Value 1 is : {count}</p>
            <p>Value 2 is : {count2}</p>
            <button onClick={() => setCount(count + 1)}>Change Value 1</button>
            <button onClick={() => setCount2(count2 + 1)}>Change Value 2</button>
        </div>
    );
};
export default MyComponant;