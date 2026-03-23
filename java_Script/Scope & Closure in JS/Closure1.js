// function counter(){
//     function increment(){
//         console.log("I am inside the Increment function");
//     }
//      return increment();
// }
// counter();
// Output: I am inside the Increment function

function counter(){
    function increment(){
        console.log("I am inside the Increment function");
    }
   return increment;
}
const count=counter(); //it will assign the refference of increment function
console.log(count);

// Output: [Function: increment]

// If we write
count();
// Output: I am inside the Increment function
//  We can Call the function because count contains the refference to that increment function


