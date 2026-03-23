// How Keys are Stored in System Memory
// Say name in User Object is stored as "name"
// lets See How?
const user={
    "name":"Aman",
    age:20,
    email:"BlaBla@gmail.com",
    amount:1100,
    "Home Address":"Dwarka Delhi"
}
// We can Access it by the following Method

console.log(user["name"]);
console.log(user.age);
console.log(user["age"]);

// Benifits
// user.home address :"Dwara,Delhi"; Giving Error
console.log(user["Home Address"]);

console.log(user);

