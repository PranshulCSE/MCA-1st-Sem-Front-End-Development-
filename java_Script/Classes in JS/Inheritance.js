// Here we will learn about inheritance in JavaScript classes
// Herewe have a Base Class named person.
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Now we will create a Derived Class named Customer that Inherits the property of the Base Class person.
class Customer extends person {
    constructor(name, age, balance,account) {
        // Using super keyword to call the constructor of the Base Class
        super(name, age);
        this.balance = balance;
        this.account=account;
    }
    checkBalance() {
        console.log(`The balance of ${this.name} is ${this.balance}`);
    }
}

const customer1 = new Customer("David", 28, 5000,"Savings");

customer1.greet(); // Inherited method from person class

console.log(customer1);
console.log(customer1.name);
console.log(customer1.age);
console.log(customer1.balance);
console.log(customer1.account);
customer1.checkBalance(); // Method from Customer class
