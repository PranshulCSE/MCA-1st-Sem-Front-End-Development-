// Understanding the Apply Method
const person = {
    firstName: 'John',
    lastName: 'Doee'};

function introduce(city, country) {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I live in ${city}, ${country}.`);
}

introduce.apply(person, ['New York', 'USA']);

// Using Apply with Arrays
const numbers = [5, 6, 121, 2, 3, 7];
const maxNumber = Math.max.apply(null, numbers);
console.log(`The maximum number is: ${maxNumber}`);