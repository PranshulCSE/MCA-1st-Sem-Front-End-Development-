// Non-Primitive Types in TypeScript
// Arrays
// Array: A collection of elements of the same type
var numberArray = [1, 2, 3, 4, 5];
console.log(numberArray); // Output: [1, 2, 3, 4, 5]
// Array with mixed types using union types
var mixedArray = [1, "Two", true, 4, "Five"];
console.log(mixedArray); // Output: [1, "Two", true, 4, "Five"]
// Tuples
// Tuple: An array with fixed number of elements where each element can have a different type
var userTuple;
userTuple = [1, "Alice", true]; // Valid
// Array with fixed size using tuple
var tupleArray = [1, "Hello", true];
console.log(tupleArray); // Output: [1, "Hello", true]
// Accessing tuple elements
console.log(userTuple[0]); // Output: 1
console.log(userTuple[1]); // Output
// Output: Alice
console.log(userTuple[2]); // Output: true
// Objects
var person = { name: "Pranshul", age: 22, isStudet: true };
console.log(person); // Output: { name: "Pranshul", age: 22, isStudent: true }
// Here in the Above Object, Typescript Automatically Infers the Types of the Properties Based on the Assigned Values
// We can also Explicitly Define the Type of an Object
var employee = {
    id: 101, name: "John Doe", isPermanent: false
};
console.log(employee); // Output: { id: 101, name: "John Doe", isPermanent: false   }
// Inline Object Type Definition
var product = {
    productId: 1, productName: "Laptop", price: 1500
};
console.log(product); // Output: { productId: 1, productName: "Laptop", price: 1500 }
// Accessing Object Properties
console.log("Employee Name:", employee.name); // Output: Employee Name: John Doe
console.log("Product Price:", product.price); // Output: Product Price: 1500
console.log("User Age:", userTuple[1]); // Output: User Age: Alice
// Modifying Object Properties
employee.isPermanent = true;
console.log("Is Employee Permanent?", employee.isPermanent); // Output: Is Employee Permanent? true
person.age = 23;
console.log("Updated Person Age:", person.age); // Output: Updated Person Age: 23
console.log(userTuple[1]); // Output: Alice
// Adding New Properties to an Object
// employee.department = "HR";
// Error: Property 'department' does not exist on type '{ id: number; name: string; isPermanent: boolean; }'
// person.address = "123 Main St";
// Error: Property 'address' does not exist on type '{ name: string; age: number; isStudet: boolean; }'
// Nested Objects
var company = {
    companyName: "Tech Solutions",
    location: "New York",
    employeeDetails: [
        { id: 1, name: "Alice", isPermanent: true },
        { id: 2, name: "Bob", isPermanent: false },
    ],
};
console.log(company);
// Output: {
//   companyName: "Tech Solutions",
//   location: "New York",
//   employeeDetails: [
//     { id: 1, name: "Alice", isPermanent: true },
//     { id: 2, name: "Bob", isPermanent: false },
//   ],
// }
