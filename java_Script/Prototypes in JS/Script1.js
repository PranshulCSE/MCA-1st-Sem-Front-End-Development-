//  Understanding Prototype in JavaScript

const object1 = {
    name: "Alice",
    age: 30,    
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};
console.log(object1);
object1.greet();
// Output: Hello, my name is Alice and I am 30 years old.

console.log(object1.hasOwnProperty('name')); // true
console.log(object1.toString()); // [object Object]

const object2={
    account:30,
};
console.log(object2.name); // undefined
object2.__proto__=object1; // setting prototype
object2.name="Robert";
console.log(object2.name); // Robert
object2.greet(); // Hello, my name is Robert and I am 30 years old.

// Prototype is nothing but an mechanism by which objects inherit features from one another.

// For Example if we write the below code

const object3=Object.create(object1);
console.log(object3); // {}
console.log(object3.name); // Alice
object3.greet(); // Hello, my name is Alice and I am 30 years old.