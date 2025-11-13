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


