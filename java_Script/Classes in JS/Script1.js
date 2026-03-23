// Understanding the Concept of Classes in JavaScript
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
const person3 = new Person("Charlie", 35);

person1.greet();
person2.greet();
person3.greet();

// Output:
// Hello, my name is Alice and I am 30 years old.
// Hello, my name is Bob and I am 25 years old.
// Hello, my name is Charlie and I am 35 years old.

console.log(typeof Person); // Output: function
console.log(person1 instanceof Person); // Output: true
console.log(person1);
console.log(person1.__proto__ === Person.prototype); // Output: true