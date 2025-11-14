const user={
    name:"Aman",
    age:20,
    0:1100,
    2:"Mohan"  
    // Keys Can Be Stored as Numbers but system will consider them as a String i.e 0= "0"
}
// way to access these umber keys
// console.log(user.0);  (Gives ERRORS)
console.log(user["0"]);
//  1100
console.log(user[2]);
// 'Mohan'

// WE can store key eitherly as a String or Symbol

// Lets see how we can implement our key as a Symbol

const sym=Symbol("id1");
const user1={
    name:"Aman",
    age:20,
    0:1100,
    [sym]:"Chamka"  
    // Keys Can Be Stored as Symbol but only by using these [] brackets
}

console.log(user1[sym]);
//  Output: Chamka


