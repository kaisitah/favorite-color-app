import { useState, useEffect, useCallback } from "react";

function Timer () {
    const [count, setCount] = useState(0);
    useEffect(
        function setTimer() {
            setTimeout(
                function handleTick() {
                    setCount(count + 1);
                },
                1000
            );
        }, 
        [count]
    ); 
    return (
        <p>{count} seconds</p>
    );
}
export default Timer;


function TimerUseCallback() {
    const [count, setCount] = useState(0);
    const handleTick = useCallback(
        function () {
            setCount(count + 1);
        },
        [count]
    );

    const setTimer = function () {
        console.log("setTimer");
        setTimeout(handleTick, 1000);
    }

    useEffect(setTimer, [handleTick]);

    return (
        <p>{count} seconds</p>
    );
}
// export default TimerUseCallback;
