// Printing only keys and their values
const user={
    name:"Aman",
    age:20,
    email:"BlaBla@gmail.com",
    amount:1100
}

console.log(Object.keys(user));
// [ 'name', 'age', 'email', 'amount' ]
console.log(Object.values(user));
// [ 'Aman', 20, 'BlaBla@gmail.com', 1100 ]
console.log(Object.entries(user));
// [
//   [ 'name', 'Aman' ],
//   [ 'age', 20 ],
//   [ 'email', 'BlaBla@gmail.com' ],
//   [ 'amount', 1100 ]
// ]

for(let keys in user){
    console.log(keys);
}

// name
// age
// email
// amount

for(let keys in user){
    console.log(keys,user[keys]);
}
// name Aman
// age 20
// email BlaBla@gmail.com
// // amount 1100
