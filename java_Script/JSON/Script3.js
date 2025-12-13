const obj1=`{
    "name": "John",
    "age": 30,
    "city": "New York"
    }`;
const obj2=JSON.parse(obj1);
console.log(obj2);
// Output: { name: 'John', age: 30, city: 'New York' }
const obj3=JSON.stringify(obj2);
console.log(obj3);
// Output: {"name":"John","age":30,"city":"New York"}

// Here in the above code we have created a JSON string Object and then converted it into
// a javaScript Object using JSON.parse() method. After that we have converted that same JavaScript Object
// back into JSON string using JSON.stringify() method.

// Note: While creating JSON string make sure to use double quotes for keys and string values
// and do not put comma at the end of last key-value pair in JSON object.