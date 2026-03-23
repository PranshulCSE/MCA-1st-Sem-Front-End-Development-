import { useState } from "react";

export default function App({value}) {
    const[count,setcount]=useState(0);
return(
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h1>{value}</h1>
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>Vote</button>
    </div>
)
}