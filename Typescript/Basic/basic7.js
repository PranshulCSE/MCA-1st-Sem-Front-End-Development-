"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Now We will Learn About Array of Objects in TypeScript
const arr = [{ name: "Pranshul", age: 21 },
    { name: "Ankit", age: 22 },
    { name: "Rahul", age: 20 }];
const arr1 = [{ name: "Pranshul", age: 21 },
    { name: "Ankit", age: 22 },
    { name: "Rahul", age: 20 }];
const arr2 = [
    { name: "Pranshul", age: 21, grade: "A" },
    { name: "Ankit", age: 30, subject: "Math" },
    { name: "Rahul", age: 20, grade: "B" },
    { name: "Sonia", age: 35, subject: "Science" }
];
console.log(arr2);
// Output:
// [
//   { name: 'Pranshul', age: 21, grade: 'A' },
//   { name: 'Ankit', age: 30, subject: 'Math' },
//   { name: 'Rahul', age: 20, grade: 'B' },
//   { name: 'Sonia', age: 35, subject: 'Science' }
// ]
// Functions in TypeScript
function greet(name) {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
console.log(greet("Pranshul")); // Output: Hello, Pranshul! Welcome to TypeScript.
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false
// Functions with Optional and Default Parameters
function introduce(name, age) {
    if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    else {
        return `My name is ${name}.`;
    }
}
console.log(introduce("Pranshul", 21)); // Output: My name is Pranshul and I am 21 years old.
console.log(introduce("Ankit")); // Output: My name is Ankit.
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // Output: 10
console.log(multiply(5, 3)); // Output: 15
// Arrow Functions in TypeScript
const square = (num) => num * num;
console.log(square(4)); // Output: 16
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 10)); // Output: 15
const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(4)); // Output: false
console.log(isOdd(5)); // Output: true
// Callback Functions in TypeScript
function fetchData(callback) {
    // Simulating data fetching
    const data = "Sample Data";
    callback(data);
}
// 2nd Call Back Example
function placeorder(order, callback) {
    const amount = order * 100;
    callback(amount);
}
placeorder(10, (amount) => {
    console.log(`Order Placed. Total Amount: ${amount}`);
});
// Sqaure of a number using Call Back Function
function calculateSquare(num, callback) {
    const result = num * num;
    callback(result);
}
calculateSquare(5, (result) => {
    console.log(`Square is: ${result}`);
});
// Rest Parameters in TypeScript
function total(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    console.log(`Sum is: ${sum}`);
}
total(10, 20, 30, 40, 50);
//# sourceMappingURL=Basic7.js.map