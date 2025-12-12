console.log("Start");

const p1=fetch("https://api.github.com/users"); 

p1.then((response)=>{
    console.log("Inside first then");
    console.log(response);  
    console.log("Before second then");
    return response.json(); 
}).then((data)=>{  // Here we are chaining another then() method to handle the promise returned by response.json()
    console.log("Inside second then");
    console.log(data);  //Here we are Actually Displaying the data of API
});

console.log("End");