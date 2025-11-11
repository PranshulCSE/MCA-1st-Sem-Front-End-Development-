const arr=[10,11,12];
const arr1=[13,14,15];
const arr2=[16,17,18];

// If I want to merge these arrays into a single one 

const arr3=[arr,arr1,arr2];
console.log(arr3);    
//  Output:[ [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ] ]
arr.push(arr1);
console.log(arr);
arr.pop();
// Output: [ 10, 11, 12, [ 13, 14, 15 ] ]

// IMPORTANT) Spread Opeartor

const arr4=[...arr,...arr1,...arr2];
console.log(arr4);

// Output: [ 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
