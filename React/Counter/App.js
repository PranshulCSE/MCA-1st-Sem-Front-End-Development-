import React,{useState} from "react";
import ReactDOM from "react-dom/client";

// Here in Main funtion we are manipulating DOM manually so we will use hook in our Project

// useState hoook will return an array in which first value is variable & Second one is function 
function Main() {
    let [count,Setcount] = useState(0);
    function increment() {
        // count++;
        Setcount(++count);
        // document.querySelector("h1").innerText=`Count is:${count}`;
        console.log(count);
    }
    function Decrement() {
        // count--;
        Setcount(--count);
        // document.querySelector("h1").innerText = `Count is:${count}`;
        console.log(count);
    }

    return (
        <div className="main">
            <h1 className="heading">Count is: {count}</h1>
            <div>
                <button className="But" onClick={(increment)}> Increment </button>
                <br></br>
                <button className="But" onClick={(Decrement)}> Decrement </button>
                </div>

        </div>
    )
}
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Main />);