// Not Recommended
// function click(){
//           const par=document.getElementById("para");
//           PageTransitionEvent.textContent="Hello!! I am Learning JavaScript Events";
//         }

// 2nd Method (Also not Recommended)
          // const par=document.getElementById("para");
          // par.onclick=function handle(){
          // par.textContent="Hello!! I am Learning JavaScript Events";
          // }
          // because in this we cannot add multiple functions,if we write then it will be overwritten;

// 3rd Method
          const par=document.getElementById("para");
          par.addEventListener('click',()=>{
           par.textContent="Hello!! I am Learning JavaScript Events";
 
          })
                 
          par.addEventListener('click',()=>{
            par.style.backgroundColor="pink";
          })

            par.addEventListener('click',()=>{
            par.style.color="blue";
          })