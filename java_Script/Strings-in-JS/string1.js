//Some Common Ways to Declare String.
// const str1="Hello JavaScript";
// const str2='Hello Baba Ji';

const str=`Manali`;
const str3=`Hello!! We are Going towards Manali Soon.`; //Best and most prescribed way to declare Strings.
//Always use this case to declare Strings..

//Now Lets Understand About Some Common String Functions.
// We know that strings are immutable so if we want to change it we cannot do it;
// str3[5]=" "; //Not Possible;

// Some Common Methods for String Manipulation in JavaScript

console.log(str3.length); 
console.log(str3.toLowerCase()); 
console.log(str3.toUpperCase());
console.log(str3.charAt(5));
console.log(str3.charCodeAt(4));
console.log(str3.endsWith("."));
console.log(str3.concat("Guys"));
console.log(str3.indexOf("W"));
console.log(str3.replace("Manali","Shimla"));
console.log(str3.startsWith("H"));
console.log(str3.slice(8,35));
console.log(str3.at(36));
console.log(str3.match(str));
console.log(str3.includes(str));
console.log(str3.search(str));
const s4=`Going`;
console.log(str3.includes(s4));
// Extracting SubString
let text=`Java Script`;
console.log(text.slice(0,4)); // Giving the Both Starting and Ending Indexes
console.log(text.slice(5));  // Giving only Start Index
console.log(text.slice(-6)); // Negative indexing means that we are starting from the reverse direction
// Another way
console.log(text.substring(0,4));
console.log(text.substr(0,3));
// Replacing Substring
let text2=text.replace("Script","Core");
console.log(text2);
// let text2=text.replacAll("Script","Core"); (Replace each & every iteration)

// Trimming : Removing Spaces

let text3=`    JAVA is a Wonderful Language.   `;
console.log(text3.trim());
// Similarly we can use TrimStart,TrimEnd;

let text4=` JavaScript HTML CSS REACT NODE EXPRESS`;
let text5=text4.split("-");
console.log(text5);

// Template Literals

let age=22;
let name=`Shivansh`;
let sen=`Hello! My name is ${name}`;
console.log(sen);



