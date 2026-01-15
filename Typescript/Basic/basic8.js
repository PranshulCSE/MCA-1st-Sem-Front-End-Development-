// Classes in TypeScript
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
var person1 = new Person("Pranshul", 21);
console.log(person1.greet()); // Output: Hello, my name is Pranshul and I am 21 years old.
