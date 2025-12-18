// this keyword in class constructor:

class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const person1 = new person("Arrjun", 28);
console.log(person1.name); // Arrjun
console.log(person1.age);  // 28

// Here , 'this' inside the constructor refers to the instance of the class being created.

// this in Arrow Function:
const  greet = () => {
    console.log(this); // In arrow functions, 'this' refers to the empty instance.
}
greet(); // {}

// In arrow functions, 'this' does not refer to the function itself but inherits from the enclosing lexical context.