// Let's Understand the Concept of Scope in JavaScript

// Global-Variables
let pin=132001;
const City="Karnal";
// The above two Variables are Global in Nature.
//  i.e They can be used by any Block or Function in this Script.
// Let's See How??

if(true){
    console.log(`My City's Pin Code is ${pin}`);
    // Here the If Block is Accesing the Variable pin
}
function city(){
    console.log(`I am Living in ${City}`);
    // Here the Function city is Accesing the Variable City
    
}
city();  // Calling the Function


// Understanding Local Variable in JavaScript

function get(){
    let a=121;  // Functional Scope limited to the Function where it is Declared
}
// console.log(a); It will give Error Because it is declared inside the Function

// Understanding Var Data type Scope.


var name="Geeta University,Panipat";
console.log(name); //Accessible in Global Scope

if(true){
    var location="NH 70";
}
console.log(location);

function display(){
    var School="School of Computer Science & Engineering";
}

// console.log(School); It will give Error Just Because var respects functional Suport


// Let's understand the Scope of Variables In Java Script in Easiest Manner

//         Global|Block|Functional
// Let     | ^  | ^    | ^ |
// Var    | ^  |  X   | ^  |
// Const  | ^  | ^  | ^  |
