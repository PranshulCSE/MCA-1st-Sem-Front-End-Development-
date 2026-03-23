import React,{useState}from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {greet as goa, meet as roa} from "./utils/dummy"

function App(){
  let [A,seta]=useState(arr);
  function SortArray(){
    A.sort((a,b)=>a.price-b.price);
    seta([...A]);
  }
  function Filtering(){
    const B=arr.filter((value)=>value.price>499);
    seta(B);
  }
  return(<>
    <Header/>
    <button onClick={SortArray}>Sort By Price</button>
    <button onClick={Filtering}>Price above 499</button>
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
          A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price}/>)   
        }
       
    </div>
    <Footer/>
    </>
  )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
