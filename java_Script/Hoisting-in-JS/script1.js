// Lets Understand the Concept of Memory Allocation in JavaScript
// As we know that our Memory is divided in two major Sections, First is Stack & Second is Heap.

var a=10;
var b=20;
function add(num1,num2){
    var c;
    c=num1+num2;
    return c;
}
var d=add(a,b);
var e=add(40,60);
console.log(d,e);

// In JS When we run the code there is Execution Context is Created;
//  It has two main Phases 
// 1) Memory Allocation
// 2) Code Execution

// Now Consider the Above code; When you run this code first the memory Allocation Begins

// var a=  undefined
// var b=  undefined
// function add=function code
// var d= undefined
// var e=  undefined

// Now it Allocates the Memory

// var a=  10
// var b=  20
// function add= here it comes and repeat the process
// (i.e First memory allocates and execution of code)


// var d= call function with respected values after that it stores  the result returned by function

// var e=  Same process as for vairable e
