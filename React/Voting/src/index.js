import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";


function Main(){
    const [Language, SetLanguage] = useState(["Python", "JavaScript", "Java", "C++"]);
    return (
        <div>
            <h1>Vote Your Favourite Programming Language</h1>
            {/* {Language.map((value,index)=><App key={index} value={value}/>)} This will create a problem when you will add C#  */}
            {Language.map((value, index) => <App key={value} value={value} />)}
            <button onClick={() => SetLanguage(["C#",...Language])}>Add C#</button>

        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);