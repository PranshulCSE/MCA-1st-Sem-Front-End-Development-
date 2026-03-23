import React from "react";
import ReactDOM from "react-dom/client";
import Second from "./second";

function App(){
    return (
        <>
        <h1>I am on the first level</h1>
        <Second/>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)