          const par=document.getElementById("para");
           par.addEventListener('dblclick',()=>{
            par.style.backgroundColor="pink";
          })

        //   There are different methods like MouseEnter,Mouseleave etc.
        const c1=document.getElementById("c1");
        c1.addEventListener('click',()=>{
            c1.textContent="I'm Clicked";
            c1.style.fontWeight=500;
            c1.style.fontSize=50;
        })
        const p1=document.getElementById("first");
        for(let child of p1.children){
            child.addEventListener('click',()=>{
            child.textContent="I'm Clicked";
         })
        }