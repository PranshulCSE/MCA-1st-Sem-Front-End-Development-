"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classes in TypeScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person1 = new Person("Pranshul", 21);
console.log(person1.greet()); // Output: Hello, my name is Pranshul and I am 21 years old.
class Customer {
    update(num) {
        this.age += num;
        return this.age;
    }
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
}
const p1 = new Customer("Deepak", 24, 55000);
console.log(p1.name);
// console.log(p1.age); Give Error bcz age is Private
// console.log(p1.balance); Give Error Bcz balance is Protected
console.log(p1.update(25));
//# sourceMappingURL=Basic8.js.map