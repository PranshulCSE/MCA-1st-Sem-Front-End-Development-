// unknown in typescript
var userInput;
userInput = 5;
userInput = "Hello";
userInput = true;
console.log(typeof userInput); // Output: boolean
// Difference between 'unknown' and 'any'
var anyVariable;
anyVariable = 10;
anyVariable = "World";
anyVariable = false;
console.log(typeof anyVariable); // Output: boolean
// With 'unknown', we need to perform type checking before assigning it to other types
var userName;
if (typeof userInput === "string") {
    userName = userInput; // Valid after type checking
    console.log("User Name:", userName);
}
// userName = userInput;
// Error: Type 'unknown' is not assignable to type 'string'
