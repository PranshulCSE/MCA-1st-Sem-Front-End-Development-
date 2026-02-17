import React from "react";
import ReactDOM from "react-dom";

function Card(params){
    return( <div style={{border:"2px Solid black", padding:"20px"}}>
    <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts.jpg" style={{height:"200px", width:"200px" }}/>
    <div style={{textAlign:"center"}}>
    <h2>{params.Item}</h2>
    <h1>{params.Price}</h1>
    <button>Shop Now</button>
    </div>
    </div>
)
}
const arr=[
    {Item:"T-Shirt",Price:"100$"},
    {Item:"Jeans",Price:"150$"},
    {Item:"High-Neck",Price:"180$"},
    {Item:"Chelsies",Price:"250$"},
    {Item:"Formal Pants",Price:"120$"},
    {Item:"Formal Shirt",Price:"110$"},
    {Item:"Black Shoes",Price:"220$"},
    {Item:"Kurta Pajama",Price:"350$"},
    {Item:"Blazer",Price:"440$"},
    {Item:"Coat-Pent",Price:"500$"},
]

function Main(){
    return(
        <div style={{display:"flex", gap:"10px",flexwrap:"wrap"}}>
                {arr.map((value,index)=>{ return <Card Item={value.Item} Price={value.Price}/>})}
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);