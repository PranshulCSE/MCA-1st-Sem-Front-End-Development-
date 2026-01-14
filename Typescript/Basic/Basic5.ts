// Aliases in Typescript

// We can Create a Custom Type Using the 'type' Keyword
type UserTuple = [number, string, boolean];

// Now we can use 'UserTuple' as a Type
let userTuple: UserTuple = [1, "Alice", true];
console.log(userTuple); // Output: [1, "Alice", true]

// Interfaces in Typescript
interface IUser {
    id: number;
    name: string;
    isActive: boolean;
}
// Now we can use 'IUser' as a Type
let user: IUser = {
    id: 2,
    name: "Bob",
    isActive: false,
};
console.log(user); // Output: { id: 2, name: "Bob", isActive: false }

// Difference between Type Aliases and Interfaces
// Type Aliases can represent Primitive Types, Union Types, and Tuples
type ID = number | string;
let userId: ID;
userId = 123;   
console.log(userId); // Output: 123

userId = "ABC123";
console.log(userId); // Output: ABC123

// Interfaces are primarily used to define the structure of Objects
interface IProduct {
    productId: number;
    productName: string;
    price: number;
}
interface IProduct {
    description?: string; // Optional Property
}
let product: IProduct = {
    productId: 1,
    productName: "Laptop",
    price: 1500,
    description: "A high-performance laptop",   
};
console.log(product);
// Output: { productId: 1, productName: "Laptop", price: 1500, description: "A high-performance laptop" }
