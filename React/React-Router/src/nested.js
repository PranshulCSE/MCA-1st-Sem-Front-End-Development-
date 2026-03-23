import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Details from "./components/Details";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Mail from "./components/Mail";
import Hello from "./components/Hello";
import Hi from "./components/Hi";

function App() {


    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/details">Details</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/details" element={<Details />}></Route>
                <Route path="/contact" element={<Contact />}>
                    <Route index element={<Mail />}></Route>
                    <Route path="Hello" element={<Hello />}></Route>
                    <Route path="Hi" element={<Hi />}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);