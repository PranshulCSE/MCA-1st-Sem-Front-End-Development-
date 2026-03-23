import { useState } from "react";
import { useDispatch } from "react-redux";
import { Increment,CustomCounter } from "./Slicer1";

export default function Update(){
    const [number, Setnumber] = useState("");
    const dispatch = useDispatch();
    function Change() {
        dispatch(CustomCounter(Number(number)));
        // dispatch(CustomCounter(Increment()));
        Setnumber("");
    }

    return (
        <>
            <input type="number" value={number} onChange={(e) => Setnumber(e.target.value)}></input>
            <button onClick={Change}>Submit </button>
        </>
    )
}