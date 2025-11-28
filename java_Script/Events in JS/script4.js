const grandpa=document.getElementById("gt");
grandpa.addEventListener('click',(obj)=>{
    console.log(obj);
    console.log("Dada ji is Clicked!!");
    // obj.stopPropagation(); To Stop Bubbling
})
// Here the AddEvent Listener Returns an Object which is used for different properties & methods related to this Event.