let a=10;
let b=20;
console.log(a<b);
console.log(a<=b);
console.log(a>b);
console.log(a>=b);
b=a; //Assigning Value of B to a;
console.log(a==b);   // Checks if the Value are equal or not
console.log(a===b); //Checks if Values are Equal and their data Types Are Similar or Not..
console.log(b);
console.log(a!=b); // Returns True Because a is not equals to b here;
// Whenever we are using these assignment or relational operators then the Null & Undefined is converted into Number
// NULL--> 0, Undefined--> NaN
console.log(0>=null);//return true
console.log(undefined<=0);//returns false;

