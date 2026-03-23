let name=["rohan","ajay","aman","karan","Mohit"];
console.log(name.sort());
// Output: [ 'ajay', 'aman', 'karan', 'mohit', 'rohan' ]
let no=[8,2,1,14,28,45,74,65,51,99];
console.log(no.sort());
// Output: [ 1, 14,  2, 28, 45, 51, 65, 74,  8, 99 ]
// Sort characters based on Ascii Table
console.log(no.reverse());
// Output: [ 99,  8, 74, 65, 51, 45, 28,  2, 14, 1 ]
let arr=[12,45,88,11,25,14,45,28];
arr.sort((a,b)=>a-b);  
// This (a,b)=>a-b function takes value and checks them us result is -ve then it returns b after a otherwise returns a after b
console.log(arr);
// Output: [ 11, 12, 14, 25, 28, 45, 45, 88]

// Now Lets Understand How to Flat Arrays

let ar=[1,2,3,[11,12,[21,22,23,[31,32,33],24],13],4];
// The above array is MultiDimensional to access any element we have to pass its index
//  Say to Access 21 we have to write ar[3][2][0];

// To flat this Array we use Flat Operation (It will return a New Array)

let ar2=ar.flat(); 
// Default Level is 1, we can provide level as argument upto which we want to flat array, to flat all we simply write infinty;
// let ar2=ar.flat(Infinity);

console.log(ar2);
// Output: [ 1, 2, 3, 11, 12, [ 21, 22, 23, [ 31, 32, 33 ], 24 ], 13, 4 ]
