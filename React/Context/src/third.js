import GlobalData from "./Global";
import { useContext } from "react";

export default function Second() {
    const data=useContext(GlobalData);
    return (
        <>
            <h2>I am on the Third Level</h2>
            <h4>Welcome to {data}</h4>;
        </>
    )
}