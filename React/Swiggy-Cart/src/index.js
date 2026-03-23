import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./header";
import Card from "./Card";
import Store from "./Store";
function App() {


    return (
        <Provider store={Store}>
            <Header />
            <Card />
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);