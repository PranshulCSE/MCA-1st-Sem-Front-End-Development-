"use strict";
// Aliases in Typescript
Object.defineProperty(exports, "__esModule", { value: true });
// Now we can use 'UserTuple' as a Type
let userTuple = [1, "Alice", true];
console.log(userTuple); // Output: [1, "Alice", true]
// Now we can use 'IUser' as a Type
let user = {
    id: 2,
    name: "Bob",
    isActive: false,
};
console.log(user); // Output: { id: 2, name: "Bob", isActive: false }
let userId;
userId = 123;
console.log(userId); // Output: 123
userId = "ABC123";
console.log(userId); // Output: ABC123
let product = {
    productId: 1,
    productName: "Laptop",
    price: 1500,
    description: "A high-performance laptop",
};
console.log(product);
// Output: { productId: 1, productName: "Laptop", price: 1500, description: "A high-performance laptop" }
//# sourceMappingURL=Basic5.js.map