const body=document.body;
const parentDiv=document.getElementById("root");


parentDiv.addEventListener("click",(btn)=>{
    body.style.backgroundColor=btn.target.id;
});