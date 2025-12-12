// how to create a New Promise in JavaScript
const myPromis=new Promise((resolve,reject)=>{
    resolve("Promise resolved successfully");
});
console.log(myPromis);
// Output: Promise { 'Promise resolved successfully' }

const MyPromise2=new Promise((resolve,reject)=>{
    // reject("Promise rejected");
    resolve({name:"John",age:30});
}).then((Response)=>{
    console.log(Response);
}).catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise is either resolved or rejected");
});
// Output: Promise rejected