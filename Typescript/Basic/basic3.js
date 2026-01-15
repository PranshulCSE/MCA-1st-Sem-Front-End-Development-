"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// unknown in typescript
let userInput;
userInput = 5;
userInput = "Hello";
userInput = true;
console.log(typeof userInput); // Output: boolean
// Difference between 'unknown' and 'any'
let anyVariable;
anyVariable = 10;
anyVariable = "World";
anyVariable = false;
console.log(typeof anyVariable); // Output: boolean
// With 'unknown', we need to perform type checking before assigning it to other types
let userName;
if (typeof userInput === "string") {
    userName = userInput; // Valid after type checking
    console.log("User Name:", userName);
}
// userName = userInput;
// Error: Type 'unknown' is not assignable to type 'string'
//# sourceMappingURL=basic3.js.map