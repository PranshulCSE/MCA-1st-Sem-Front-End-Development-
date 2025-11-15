// Different Ways to Create Function

// 1.  Function Declaration
 function sum(a,b){
    console.log(a+b);
 }
//  if we write console.log(sub(10,4)); it will return reference Error 
// just because the function is not defined before this statement

//  2. Function Expression
const sub=function(a,b){
    console.log(a-b);
}

// 3.  Arrow Functions (ES6 - The Modern Way)

const mul=(a,b)=>{
    return a*b;
}
