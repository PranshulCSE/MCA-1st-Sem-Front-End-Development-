import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import store from "./Store";
import Create from "./Create";


function Main(){

    return(
        <Provider store={store}>
        <Create/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")). render(<Main/>);