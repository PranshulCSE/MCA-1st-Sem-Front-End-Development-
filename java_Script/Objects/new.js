// Here I am going to Create a object using New Keyword
let a=10;
// In the ABove statement we are creating a number simply.
let b= new Number(10);
// Here We are declaring a number but first ;ets check its data type
console.log(typeof (b));
// so the output is Object
// Note: here we are declaring a number but it is considered as an Object
// Similarly we can create array,object and string too but it will also considered as an object
// Non Primitive Data Types Like array,fucntion,object are compared on the basis of references
// primitve data types are compared on the basis of their values
// Let's understand the Example
let c=10;
console.log(a==c); // it returns true
let d= new Number(10);
console.log(b==d); // It Return False
// But both objects having same value , now understand the below example
let e=b;
console.log(b==e); // It will return true because we ahve created a refference to the object e;