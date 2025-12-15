// We know that async functions return a promise. Here, we create an async function that simulates fetching user data with a delay.

async function fetchUserData(){
    return new Promise((resolve, reject) => {
            resolve("User data fetched!");
            // reject("Failed to fetch user data.");
    });
};

const result=fetchUserData();
console.log(result); // Output: [object Promise]

fetchUserData().then(data => console.log(data))
.catch((error)=>{
    console.log("Error:", error);
}) 
