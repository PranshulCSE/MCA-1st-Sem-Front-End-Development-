let a="10";
b=Number(a);
console.log(b);
console.log(typeof(b));
let name="Pranshul";
m=Number(name);
console.log(m); //Returns NaN(Not a Number) 
//When you divide 0/0 it will also give NaN
let c="210";
console.log(String(c));
console.log(Number(true));  // output=1
console.log(Number(false)); // output=0
console.log(Number(null)); // output=0
console.log(Number(undefined)); // output=NaN

// Coverting diiferent data Types to String

console.log(String(121));
console.log(String(13211));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));

// Converting different data types into Boolean

console.log(Boolean(0)); // output=false
console.log(Boolean(13211));
console.log(Boolean(-11));
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(Abcd));

// Note: Boolean will only give output = false whenever we are providing the value zero,null or undefined
// In remaining cases it will give true everytime





