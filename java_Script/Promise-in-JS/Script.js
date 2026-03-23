console.log("Start");
const p1=fetch("https://api.github.com/users"); 
// console.log(p1);   //Output=Promise { <pending> }
// We cannot use the data directly from the promise, we have to use .then() method to extract the data from the promise when it is resolved.
// then method will return data if the request is successful or else it will return error that request failed.

p1.then((response)=>{
    console.log("Inside first then");
    console.log(response);  //Output=Response {type: 'cors', url: 'https://api.github.com/users', redirected: false, status: 200, ok: true, …}
    //TO get data in the form of Object or Array we have to use response.json() method which also returns a promise.
    console.log("Before second then");
    console.log(response.json()); //Output=Promise { <pending> }
    // Now We will see How to display data from the API using chaining of then() method in the Program Script2.js 
    })
console.log("End");