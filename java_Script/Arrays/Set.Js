const arr=[15,25,36,14,25,88,66,45,75,45,95,24];
// Creating A Set
const S1=new Set(arr);
console.log(S1);
// Output: Set(10) { 15, 25, 36, 14, 88, 66, 45, 75, 95, 24 }

// Adding Value in Set
S1.add(100);
console.log(S1);
// Output: Set(11) { 15, 25, 36, 14, 88, 66, 45, 75, 95, 24, 100 }

// Checking the Length/Size of a Set
console.log(S1.size);
// Output:11

// Checking if Set Contains a Particular Item
console.log(S1.has(95));  //True
console.log(S1.has(35));  //False

// Deleting a particular Item from Set
S1.delete(88);
console.log(S1);
// Output: Set(10) { 15, 25, 36, 14, 66, 45, 75, 95, 24, 100 }

S1.clear();
console.log(S1);
// Output: Set(0) {}
//  Just Because Clear Method Deletes all the Elements from the Set

// To get Set Back  in Array form we can do this by following method

const mail=["ro","mo","ko","ro","bo","ho"];
const S2=new Set(mail);
const Mail=[...S2];
console.log(Mail);

// Output: [ 'ro', 'mo', 'ko', 'bo', 'ho' ]


