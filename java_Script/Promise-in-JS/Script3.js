// Chaining of Promises in JavaScript
console.log("Start");

fetch("https://api.github.com/users")
.then((response)=>{
    return response.json(); 
}).then((data)=>{  // Here we are chaining another then() method to handle the promise returned by response.json()
    console.log(data);  //Here we are Actually Displaying the data of API
})

console.log("End");