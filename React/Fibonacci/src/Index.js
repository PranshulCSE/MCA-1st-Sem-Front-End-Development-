import React, { useState, useEffect, useMemo, useCallback } from "react";
import ReactDOM from "react-dom/client";

// function Generate(num) {
//     if (num <= 1) return num;
//     return Generate(num - 1) + Generate(num - 2);
// }

function Main() {
    const [count, SetCount] = useState(0);
    const [Num, SetNum] = useState(0);
    // const [result,SetResult]=useState(null);

const Generate=useCallback((num)=>{
    if (num <= 1) return num;
    return Generate(num - 1) + Generate(num - 2);
},[]);
    // const result=Generate(Num);  //2nd Method
    const result = useMemo(() => Generate(Num), [Num]); //Recomended Method

    // useEffect(()=>{
    //     SetResult=Generate(Num);
    // },[Num]);

    return (
        <>
            <div>
                <h1> Counter is {count}</h1>
                <button value={count} onClick={() => SetCount(count + 1)}>Increment</button>
                <button value={count} onClick={() => SetCount(count - 1)}>Decrement</button>
            </div>
            <div>
                <h2>Fibonacci Number is: {result}</h2>
                <input type="number" placeholder="Enter Number" value={Num} onChange={(e) => SetNum(e.target.value)}></input>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);