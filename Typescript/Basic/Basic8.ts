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



class Customer{
  public  name:string;
  private  age:number;
   protected balance:number;

   update(num:number):number{
        this.age+=num;
        return this.age;
   }

    constructor(name:string,age:number,balance:number){
        this.name=name;
        this.age=age;
        this.balance=balance;
    }

}
const p1= new Customer("Deepak",24,55000);

console.log(p1.name);
// console.log(p1.age); Give Error bcz age is Private
// console.log(p1.balance); Give Error Bcz balance is Protected

console.log(p1.update(25));

// Here we are Accessing age which is protected using class's own Method



// Inheritence in TypeScript
class Employee extends Customer{
    private salary:number;

    constructor(name:string,age:number,balance:number,salary:number){
        super(name,age,balance);
        this.salary=salary;
    }
}

const E1= new Employee("Bacha yadav",11,101,11);
console.log(E1);

