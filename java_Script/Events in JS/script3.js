// Understanding the Event Bubbling
// const grandparent=document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
//     console.log("Dada ji is Clicked!!");
// })

// const parent=document.getElementById("parent");
// grandparent.addEventListener('click',()=>{
//     console.log("Papa ji is Clicked!!");
// })

// const child=document.getElementById("child");
// grandparent.addEventListener('click',()=>{
//     console.log("Beta is Clicked!!");
// })

// To Change the Ordering of EventBubbling
const grandparent=document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    console.log("Dada ji is Clicked!!");
},true)

const parent=document.getElementById("parent");
grandparent.addEventListener('click',()=>{
    console.log("Papa ji is Clicked!!");
},true)

const child=document.getElementById("child");
grandparent.addEventListener('click',()=>{
    console.log("Beta is Clicked!!");
},true)