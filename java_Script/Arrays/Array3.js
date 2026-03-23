// Mutating and accessing Arrays
let arr1=[10,20,30,40,50,60];
arr1[3]=400;
console.log(arr1);
// Output:[ 10, 20, 30, 400, 50, 60 ]
console.log(arr1[3]);
//Output:[400];
arr1[3]=40;

console.log("For Loop in JavaScript");


// Iterating and Looping on Arrays in JavaScript

for(let i=0;i<arr1.length;i++)
{
console.log(arr1[i]);
}
console.log("For Each Loop in JavaScript");
// For of loop
for(let num of arr1){
    console.log(num);
}