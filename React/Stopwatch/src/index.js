import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import ReactDOM from "react-dom/client";


function Main() {
    const [Time, Settime] = useState(0);
    const refering = useRef(null);
    function start() {

        if (refering.current === null) {
            refering.current = setInterval(() => {
                Settime(prev => prev + 1);
                console.log(Time);
            }, 1000);
        }
    }

    function stop() {
        if (refering.current != null) {
            clearInterval(refering.current);
            refering.current = null;
        }
    }

    function reset() {
        clearInterval(refering.current);
        refering.current = null;
        Settime(0);
    }
    return (
        <div>
            <h1>{Time}</h1>
            <div>
                <button onClick={start}>Start</button>
                <br />
                <button onClick={stop}>Stop</button>
                <br />
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);