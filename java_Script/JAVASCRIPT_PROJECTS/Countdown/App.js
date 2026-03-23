const ht=document.getElementById("countdown");

function countdown(){
    const today=new Date();
    const eventdate=new Date("December 06, 2026 00:00:00");
    const diff=eventdate-today;
    const months=Math.floor(diff/(1000*60*60*24*30));
    const days=Math.floor(diff/(1000*60*60*24)%30);
    const hours=Math.floor(diff/(1000*60*60)%24);
    const minutes=Math.floor(diff/(1000*60)%60);
    const seconds=Math.floor(diff/1000%60);
    ht.innerHTML=`${months} Months ${days} Days ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
    ht.style.fontSize="30px";
    ht.style.display="flex";
    ht.style.height="100vh";
    ht.style.justifyContent="center";
    ht.style.alignItems="center";
}
setInterval(countdown,1000);