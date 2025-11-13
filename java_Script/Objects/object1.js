// ObjectKey value Pair
const user={
    name:"Aman",
    age:20,
    email:"BlaBla@gmail.com",
    amount:1100
}
console.log(user);
console.log(typeof(user));

// Accessing Particular Item

console.log(user.age);

// CRUD(Create Read Update Delete)

// Creating Key Value Pair
user.adhaar="121212";
// Updating Object
user.amount=5000;
// Deleting Key Value
delete user.email;

console.log(user);



