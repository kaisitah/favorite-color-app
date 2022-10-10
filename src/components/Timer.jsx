import { useState, useEffect, useCallback } from "react";

function Timer(props) {
    const [count, setCount] = useState(0);
    useEffect(
        function setTimer() {
            !props.stopped && setTimeout(
                function handleTick() {
                    setCount(count + 1);
                },
                1000
            );
        }, 
        [props.stopped, count]
    ); 
    return (<>
            <p>{count} seconds</p>
            {props.stopped && (count <= 5 ?
                <p>That was fast, you must be pretty sure about your favorite color!</p> :
                <p>Thanks, great choice!</p> 
            )}
    </>);
}
export default Timer;

// eslint-disable-next-line no-unused-vars -- This is alternative component for Timer
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
