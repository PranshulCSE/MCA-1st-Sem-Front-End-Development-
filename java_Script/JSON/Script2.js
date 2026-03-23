// How to Create a JSON Object in JavaScript
const obj=`{
    "name":"Aman",
    "age":22,
    "city":"Delhi" 
}`;  //Do not put comma at the end of last key-value pair in JSON object

console.log(obj);
// From the above code we can see that JSON object is similar to JavaScript Object
//  But the difference is that in JSON keys and string values must be enclosed in double quotes.

// To convert JSON string to JavaScript Object we use JSON.parse() method.
const JSObj=JSON.parse(obj);
console.log(JSObj);
// Output: { name: 'Aman', age: 22, city: 'Delhi' }