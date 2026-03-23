import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "./Slice";
import CoinCard from "./CoinCard";

export default function Create(){
    const dispatch=useDispatch();
    const {data,loading,error}=useSelector((state)=>state.slice1);
    useEffect(()=>{
        dispatch(Fetchdata(15));
    },[])

    // Displaying the data
    if(loading){
        return <h1>Data is loading</h1>
    }
    if(error){
        return <h1>Error Occured while loading</h1>
    }

    return(
        <>
        <div>
            {
                data.map((item)=>{
                    return <CoinCard key={item.id} item={item}/>
                })
            }
        </div>
        </>
    )
}