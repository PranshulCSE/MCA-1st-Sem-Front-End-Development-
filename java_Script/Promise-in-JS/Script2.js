console.log("Start");

const p1=fetch("https://api.github.com/users"); 

const p2=p1.then((response)=>{
    return response.json(); 
})
p2.then((data)=>{ console.log(data); })

console.log("End");