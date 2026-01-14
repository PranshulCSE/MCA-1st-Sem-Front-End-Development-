// If we Dont Assign a Value to a Variable, Typescript will
// Automatically Assign the 'any' Type to that Variable 

let randomVariable;
randomVariable = 10;
console.log(typeof randomVariable); // Output: number
randomVariable = "Hello";
console.log(typeof randomVariable);
    // Output: string
randomVariable = true;
console.log(typeof randomVariable);
    // Output: boolean

// To Avoid this, we can Explicitly Specify the Type of the Variable

let specificVariable: number;
specificVariable = 20;
console.log(typeof specificVariable); // Output: number
// specificVariable = "World";
// Error: Type 'string' is not assignable to type 'number'


// Tyepscript will automaticly assign the type based on the initial value

let inferredVariable = 30;
console.log(typeof inferredVariable); // Output: number
inferredVariable = 40; // Valid
// inferredVariable = "TypeScript";
// Error: Type 'string' is not assignable to type 'number'