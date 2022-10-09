import { useState, useEffect } from "react";

function Timer () {
    const [count, setCount] = useState(0);
    
    useEffect(setTimer, [count]);
    function setTimer() {
        setTimeout(handleTick, 1000);
    }
    
    return (

    )
}