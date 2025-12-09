console.log("First");
let sum = 0;
for(let i=0;i<3000000000;i++)
    sum+=i;

console.log(sum);
console.log("Last");
// Open Console in your browser run this code to see the difference in execution time
// Now you can see that the synchronous code (the for loop) blocks the execution of other code until it is finished.
// The "Last" message will only be logged after the loop completes, demonstrating how synchronous operations can block the event loop.
