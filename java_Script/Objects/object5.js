// Destructuring an Object
const user={
    name:"Aman",
    age:20,
    email:"BlaBla@gmail.com",
    amount:1100
}

const{name,age}=user;
console.log(name,age);
// Output:Aman 20
const{name:UN,age:UA}=user;  //Assigning Names
console.log(UN,UA);


// for of loop is always use for arrays
for(let keys of Object.keys(user))
{
    console.log(keys);
 }
// name
// age
// email
// amount
for(let value of Object.values(user))
{
    console.log(value);
}
// Aman
// 20
// BlaBla@gmail.com
// 1100
for(let value of Object.entries(user))
{
    console.log(value);
}
// [ 'name', 'Aman' ]
// [ 'age', 20 ]
// [ 'email', 'BlaBla@gmail.com' ]
// [ 'amount', 1100 ]