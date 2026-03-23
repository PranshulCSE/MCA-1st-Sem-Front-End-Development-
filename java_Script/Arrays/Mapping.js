const arr=[10,20,30,40,50,60,70,80,90];
const arr2=arr.map((num)=> num*3);
console.log(arr2);
// Output: [  30,  60,  90, 120, 150, 180, 210, 240, 270 ]
// const arr3=arr.filter((num)=>num>40);
// console.log(arr3);
// Output: [ 50, 60, 70, 80, 90 ]

// To get output in Descending order we can Sort it similarly as we Sort Normal Array
const arr3=arr.filter((num)=>num>40).sort((a,b)=>b-a);
console.log(arr3);
//  Output: [ 90, 80, 70, 60, 50 ]
