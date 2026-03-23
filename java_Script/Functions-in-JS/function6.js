// Lets Discuss the Concept of CallBack Functions

function Greet(){
    console.log("Hello Guys!! I am Learning JavaScript");
}

// function Learn() {
//     console.log("I am Studying about the JavaScript Functions Now!!"); 
// }

// Learn(Greet());

// Output:Hello Guys!! I am Learning JavaScript
// I am Studying about the JavaScript Functions Now!!
Learn(Greet);

function Learn(CallBack) {
    console.log("I am Studying about the JavaScript Functions Now!!"); 
    CallBack();
}

// Output:I am Studying about the JavaScript Functions Now!!
// Hello Guys!! I am Learning JavaScript

// Basically in Callback we can Control the Actual Position where 
// the Function will be going to execute

