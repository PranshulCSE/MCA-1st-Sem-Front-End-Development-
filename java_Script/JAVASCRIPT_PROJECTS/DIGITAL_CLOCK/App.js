function updateTime(){
const timer=document.getElementById("root");
const now=new Date();
const timing=now.toLocaleTimeString();
timer.innerHTML=timing;
}
setInterval(updateTime,1000);

const timer=document.getElementById("root");
timer.style.fontSize="100px";
timer.style.height="100vh";
timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.border="2px dashed white";