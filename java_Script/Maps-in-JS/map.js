const m1= new Map([
    ["Name","Rohit"],
    [132001,"Karnal"],
    [true,"$"],
    [[10,11,12],"Array"]
]);

console.log(m1);

// Output:
// Map(4) {
//   'Name' => 'Rohit',
//   132001 => 'Karnal',
//   true => '$',
//   [ 10, 11, 12 ] => 'Array'
// }

// In Simple Words Map are used for Storing Key value Pairs as Similar to Object.

// Map Operations

m1.set({name:"Manish",age:20},false);
console.log(m1);
// Output:
// Map(5) {
//   'Name' => 'Rohit',
//   132001 => 'Karnal',
//   true => '$',
//   [ 10, 11, 12 ] => 'Array',
//   { name: 'Manish', age: 20 } => false
// }

console.log(m1.size);
// Output: 5

console.log(m1.get("Name")); //Return value for that Particular Key
console.log(m1.has(true));  //Checks for that Particular Key is Present in Map or Not
m1.delete(true);  // Deletes that Specific Key along with that Value
console.log(m1);
// m1.clear();  Deletes all the key along with their Values