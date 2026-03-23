// JSON= JavaScript Object Notation 
// This json is easily understandable by both humans and machines and also it is language independent format.
const obj1={
    name:"Aman",
    age:22,
    city:"Delhi"
};
const jsonData=JSON.stringify(obj1);
console.log(jsonData);

// Output: 
//    {
//     "name":"Aman",
//     "age":22,
//     "city":"Delhi"
//     }

// To see the difference how JSON looks compared to JavaScript Object.

const obj2={
    name:"Aman",
    age:22,
    city:"Delhi",
    greet:function(){
        console.log("Hello");
    },
    Paisa:undefined,
};
const jsonData2=JSON.stringify(obj2);
console.log(jsonData2);

// Output:  
//     {
//     "name":"Aman",
//     "age":22,
//     "city":"Delhi"
//     }
// It is Because JSON doesn't support functions and undefined values.