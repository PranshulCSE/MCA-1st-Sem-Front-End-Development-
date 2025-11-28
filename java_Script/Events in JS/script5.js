        const c1=document.getElementsByClassName("first");
        //  c1.addEventListener('click',(e)=>{
        //     e.target.textContent="I am Clicked";
        // })
        //   To Remove addEventListener Follow the Below Code

        // Transferring the code into fumction
        function e(){
          e.target.textContent="I am Clicked";
        }
         c1.addEventListener('click',e)
         c1.removeaddEventListener('click',e)