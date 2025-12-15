// Learning the concept of Async and Await in JavaScript

function greet(){
    return "Hello, welcome to the world of Async and Await!";
}

const response=greet();
console.log(response);  // Output: Hello, welcome to the world of Async and Await!

async function fetchData(){
    return "Data fetched successfully!";
}
console.log(fetchData()); // Output: [object Promise]
fetchData().then(data => console.log(data)); // Output: Data fetched successfully!

