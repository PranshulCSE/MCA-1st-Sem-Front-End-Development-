let a=10;
let b=245.1672301; // Make a Floating Point No. here
// Now we will use some Common Functions here
let c=b.toFixed(3); // it will convert the float area to the described no.
console.log(c); // output=245.167
console.log(typeof(c)); // output= string (Just because all these functions mostly convert Numbers into String)

let d=b.toPrecision(4);
console.log(d); // output=245.2
console.log(typeof(d)); // output= string (Just because all these functions mostly convert Numbers into String)

let e=b.toString();
console.log(e); // output=245.1672301
console.log(typeof(e)); // output= string (Just because all these functions mostly convert Numbers into String)

// Note: Make sure to notice that the above two functions are rounding off the value of the input number
