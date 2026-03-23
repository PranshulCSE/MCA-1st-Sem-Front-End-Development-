// Trimming array with slice & Splice operation

// 1) Slice Operation

const arr1=[10,11,15,20,25,12,13,14];
console.log(arr1.slice(2,5));
// Output: [ 15, 20, 25 ]
const arr2=arr1.slice(2,5);
console.log(arr2);
//  [ 15, 20, 25 ]
console.log(arr1);
// Output: [ 10, 11, 15, 20, 25, 12, 13, 14 ]


//   2) SPLICE Operation

const arr3=[11,12,13,21,22,23,24,25,14,15];
const arr4=arr3.splice(3,5);

console.log(arr3);
// Output:[ 11, 12, 13, 14, 15 ]
console.log(arr4);
// Output:[ 21, 22, 23, 24, 25 ]


// (Key Difference)
// * Slice doesnt change the original Element;
// *But Splice cut off Elements from the original Array;