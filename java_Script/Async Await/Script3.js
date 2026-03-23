// fetch("https://api.github.com/users")
// .then((response) => response.json())
// .then((data) => {
//     console.log("Fetched user data:", data);
// })
// .catch((error) => {
//     console.log("Error fetching user data:", error);
// });

// The Above format can be rewritten using Async and Await for better readability.


// const response= await fetch("https://api.github.com/users");
// const data= await response.json();
// console.log("Fetched user data using Async/Await:", data);


// Await keyword tells the JavaScript engine to wait for the promise to resolve before moving to the next line of code.


// Now we will use the Async and Await keywords to handle errors using try and catch blocks.
async function fetchUserData(){
    try {
        console.log("Fetching user data...");
        const response= await fetch("https://api.github.com/users");
        const data= await response.json();
        console.log("Fetched user data using Async/Await:", data);
    }
        catch (error) {
        console.log("Error fetching user data using Async/Await:", error);
    }
}
console.log("Before fetching user data");
fetchUserData();
console.log("After fetching user data");