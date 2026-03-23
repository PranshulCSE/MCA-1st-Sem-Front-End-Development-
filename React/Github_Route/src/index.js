import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter , Routes, Route ,Link} from "react-router";
import Github from "./components/Github";
import Home from "./components/Home";


function App(){


    return(
        <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home />}></Route>
            <Route path="/Github/:name" element={<Github/>}></Route>
                
        </Routes>
        </BrowserRouter>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);