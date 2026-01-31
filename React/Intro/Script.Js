const header1=document.createElement("h1");
header1.innerText="Hello React Users!!";
header1.style.backgroundColor="blue";
header1.style.fontSize="35px";
header1.style.color="white";

const header2=document.createElement("h3");
header2.innerText="Hello MERN Stack Users!!";
header2.style.backgroundColor="black";
header2.style.fontSize="35px";
header2.style.color="white";

const header3=document.createElement("h5");
header3.innerText="Components of MERN !!";
header3.style.backgroundColor="black";
header3.style.fontSize="35px";
header3.style.color="white";

// For Creating Unordered List using JS only
const Ul=document.createElement("ul");
const L1=document.createElement("li");
const L2=document.createElement("li");
const L3=document.createElement("li");
const L4=document.createElement("li");

L1.innerText="MongoDb";
L2.innerText="Express";
L3.innerText="React JS";
L4.innerText="Node JS";

Ul.style.backgroundColor="alice";
Ul.style.color="green";
Ul.style.fontSize="25px";

Ul.append(L1);
Ul.append(L2);
Ul.append(L3);
Ul.append(L4);

const root=document.getElementById("root");
    
root.append(header1);
root.append(header2);
root.append(header3);
root.append(Ul);

// Same task which we have done in almost 40 Lines of code can be done in less lines using creation own library lets see an example in Script2.JS
