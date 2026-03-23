import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Store";
import Counting from "./Counting";
import Update from "./Update";
function App() {


    return (
        <Provider store={stores}>
            <Counting />
            <br/>
            <br />
            <br />
            <Update/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// npm install react-redux
// npm install @reduxjs/toolkit