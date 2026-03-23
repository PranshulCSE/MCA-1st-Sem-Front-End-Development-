const arrow=(num1,num2)=>{
    console.log("We are inside the Body of the Arrow Function");
} 
arrow();
const square=(num1)=> num1*num1;
// See the Above Line of Code it will return Sqaure of the No. num1
// In arrow function when we have only a return statement inside body
//  then we can impliment it like this

console.log(square(11));

// Similarly Arrow function gives us an Advantage that if we have only a 
// single parameter to pass then we can implement it without using brackets()
// Format will be : const square=num=> num*num;



// Arrow Function returning Objects
const obj=()=>{
    return {
        name:"Pranshul",
        class:"MCA"
    }
}
console.log(obj());
// { name: 'Pranshul', class: 'MCA' }

const obj2=()=>({name:"Mohit",class:"M.Tech"}) ;
// {name:"Mohit",class:"M.Tech"}


// IIFE
(function greet(){
    console.log("We are inside IIFE(Immediately Invoked Function)");
})();


(()=>{
    console.log("We are inside IIFE(Immediately Invoked Function)");
})();


// Lets Understand IIFE; You can see there is two pair of brackets one is for wrapping
// and another is for calling that function
