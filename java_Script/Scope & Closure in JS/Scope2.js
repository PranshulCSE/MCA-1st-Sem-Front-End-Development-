let city=`Karnal`;
function Loc(){
    let city=`SriNagar`;
    console.log(city);
}
Loc();
// Output: SriNagar

let val=11;
function Value(){
    console.log("Inside the Outer Function");
    let val=111;
    function Value2(){
        let val=1100;  
     console.log(val); //Output:1100 But if we remove the above statment then it will be 111.
    }
    Value2();
}
Value();
// Value2(); It will give Error Just Because this function is Not defined here.
