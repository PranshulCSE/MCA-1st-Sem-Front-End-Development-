// First of all Lets understand the concept of Strict Mode in JavaScript
// Strict mode is a way to opt in to a restricted variant of JavaScript, 
// thereby implicitly opting-out of "sloppy mode". It helps in catching common coding bloopers, 
// preventing the use of certain syntax likely to be defined in future versions of ECMAScript.

// For example, in strict mode, you cannot use undeclared variables.
`use strict`;

// Example 1: Global Context
console.log(this); // In strict mode, this will be undefined in the global context
function globalFunction() {
    console.log(this); // In strict mode, this will be undefined
}   
globalFunction();

// Example 2: Object Method
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(this.name); // 'Alice'
    }
};
obj.greet();
// Example 3: Constructor Function
function Person(name) {
    this.name = name;
}   
const person1 = new Person('Bob');
console.log(person1.name); // 'Bob'
// Example 4: Event Handler
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // In strict mode, this refers to the button element
}); 
