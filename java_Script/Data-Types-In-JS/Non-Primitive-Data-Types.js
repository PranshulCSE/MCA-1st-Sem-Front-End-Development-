// Non Primitive Data Types include Arrays, Objects ,Function

let arr=[1,2,3,'a','b','c'];
console.log(arr);
let obj={
    name:"Amit",
    age:19,
    salary:15000
};
console.log(obj);
let s=function print(){                         //Storing a Function into Some Variable
    console.log("Hello JavaScript");
}
s();
console.log("Understanding typeof property for non primitive data types");

console.log(typeof(arr)); //It will return abject because array is an object in Javascript;
console.log(typeof(obj));
console.log(typeof(s));