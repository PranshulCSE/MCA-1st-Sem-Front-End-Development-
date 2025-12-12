fetch("https://api.github.com/users")
.then((response)=>{
    return response.json(); 
}).then((data)=>{
    const parent=document.getElementById("first");
    const one=document.createElement("h2");
    one.innerText="Git Hub Users Avatar";
    parent.append(one);
        for(let i=0;i<data.length;i++){
            const image=document.createElement("img");
            image.style.width="50px";
            image.style.height="50px";
            image.src=data[i].avatar_url;
            parent.append(image);
        }
})