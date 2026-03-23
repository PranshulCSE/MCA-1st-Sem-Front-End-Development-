
// fetch api is used to get data from server and it returns a promise.
// Here we are fetching data from Git Hub Users API and displaying their avatars on the webpage.
fetch("https://api.github.com/users").then((response)=>{
    if(!response.ok){
        throw new Error("Network response was not ok"); //Here we are throwing an error if the response is not ok.
    }
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

// Just in case if we are unable to fetch data from the server then we can catch the error using catch() method.
.catch((error)=>{
    const parent=document.getElementById("first");
   parent.textContent=error.message;
});