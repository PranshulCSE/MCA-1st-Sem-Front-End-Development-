// Understanding Bind Method
const user = {
    name: "John Doe",
    age: 30,
    profession: "Developer",
    greet: function() {
        console.log(`Hello Mr./Ms. ${this.name}, Welcome to the World of JavaScript 'this' Keyword`);
    }
};
const greetFunction = user.greet;

// Using bind to create a new function with 'this' bound to 'user'
const boundGreet = greetFunction.bind(user);
boundGreet(); // Hello Mr./Ms. John Doe, Welcome to the World of JavaScript 'this' Keyword  
// Using bind with parameters
function introduce(city, country) {
    console.log(`Hello, my name is ${this.name}. I live in ${city}, ${country}.`);
}
const boundIntroduce = introduce.bind(user, 'New York', 'USA');
boundIntroduce(); // Hello, my name is John Doe. I live in New York, USA.
// Using bind to create a new object with modified age
function incrementAge(years) {
    this.age += years;
    console.log(`${this.name}'s New Age after incrementing by ${years} years is: ${this.age}`);
}
const incrementUserAge = incrementAge.bind(user, 5);
incrementUserAge(); // John Doe's New Age after incrementing by 5 years is: 35