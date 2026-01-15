// Classes in TypeScript
class Person{
    name:string
    age:number
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    greet():string{
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1=new Person("Pranshul", 21);
console.log(person1.greet()); // Output: Hello, my name is Pranshul and I am 21 years old.