// Function as an Expression in Java Script


const Addno=function(n1,n2){
    return n1+n2;
}
console.log(Addno(9,12));

// If we Call the function before its definition it will give Error.


// Arrrow Function

const Add=()=>{
    console.log("We are inside arrow function");
}
Add();