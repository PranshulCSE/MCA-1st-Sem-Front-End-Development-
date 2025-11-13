// Objects in  Java Script are copied By Refferences

const user={
    "name":"Aman",
    age:20,
    email:"BlaBla@gmail.com",
    amount:1100,
    "Home Address":"Dwarka Delhi"
}

const user2=user;
user2.age=25;
console.log(user);

// {
//   name: 'Aman',
//   age: 25,      (Check the Output Here)
//   email: 'BlaBla@gmail.com',
//   amount: 1100,
//   'Home Address': 'Dwarka Delhi'
// }
