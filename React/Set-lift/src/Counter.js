import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

function App() {
    const [Count, SetCount] = useState(0);
    return (
        <>
            <h1> Counter is: {Count}</h1>
            <Increment Counter={Count} SetCounter={SetCount} />
            <Decrement Counter={Count} SetCounter={SetCount} />
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />)


// Setlift is nothing but a way two children can access same arguments of parents pass to them as props