import {useCallback,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
function Github() {
    return (
        <>
            < Header />
            <Body/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Github />);