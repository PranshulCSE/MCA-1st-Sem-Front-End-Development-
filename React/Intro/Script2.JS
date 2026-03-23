function app(children){
const parent=document.getElementById("root");
    parent.append(children);
}
const react={
create:function (tag,styles,content){
        const element= document.createElement(tag);
                for(let key in styles){
                    element.style[key]=styles[key];
                }
                // Checking if the content is string or not
                if(typeof content === String)
                     element.innertext=content;
                else
                    for(let val of content)
                        element.append(val);
        return element;        
}
}
const head1=react.create("h1",{backgroundColor:"blue",fontSize:"35px",color:"white"},"Hello Node JS Users!!");
const head2=react.create("h3",{backgroundColor:"black",fontSize:"35px",color:"white"},"Hello MERN Stack Users!!");
const head3=react.create("h5",{backgroundColor:"blue",fontSize:"35px",color:"white"}," MERN Stack Components!!");
// Creating Unordered List Items
const L1=react.create("li",{},"MongoDb");
const L2=react.create("li",{},"Express");
const L3=react.create("li",{},"React");
const L4=react.create("li",{},"Node");
const ul=react.create("ul",{backgroundColor:"black",fontSize:"35px",color:"white"},[L1,L2,L3,L4]);
// Appending Content into Document
app(head1);
app(head2);
app(head3);
app(ul);
// As you can see the code is very simple as compare to Script.JS

