const user={
    name: "John Doe",
    age: 30,
    profession: "Developer",

    greet  :  function (){
    console.log(`Hello Mr./Ms. ${this.name}, Welcome to the World of JavaScript 'this' Keyword`);
}
};

user.greet();

const user2={
    name: "Jane Smith",
    age: 25,
    profession: "Designer"
};

user2.greet = user.greet;

user2.greet();

// Take a Situation where we have to create multiple user objects and each object should have the greet method
// This situation will lead to code duplication if we define the greet method for each object separately


// In Normal Function Call
const greetFunction = user.greet;
greetFunction(); // In non-strict mode, this will refer to the global object (window in browsers)
// In Strict Mode, this will be undefined

function showAge(){
    console.log(`${this.name}'s Age is: ${this.age}`);
}

showAge.call(user); 
showAge.call(user2); 


function ageincrement(years){
    this.age += years;
    console.log(`${this.name}'s New Age after incrementing by ${years} years is: ${this.age}`);
}

ageincrement.call(user, 5);
ageincrement.call(user2, 3);