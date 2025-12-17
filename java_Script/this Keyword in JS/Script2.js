// In browser environments, the global object is 'window'.
console.log(this); // In non-strict mode, this will refer to the window object
// But in Node.js, the global object is 'global'.

// In strict mode, 'this' in the global context is undefined.


// function globalFunction() {
//     console.log(this); // In non-strict mode, this will refer to the global object (window in browsers)
// }
// globalFunction();



// Understanding the concept of Globalthis which provides a standard way to access the global this value across different environments.
console.log(globalThis); // Refers to the global object (window in browsers, global in Node.js)



// Lets Learn the Concept of 'this' in Keyword in JavaScript

console.log(this); // In non-strict mode in NodeJS, this will refer to the empty object

// But if we write the same code in Browser Environment, it will refer to the Window Object i.e Global Object

