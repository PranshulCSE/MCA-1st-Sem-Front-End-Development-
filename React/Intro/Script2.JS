function app(children){
const parent=document.getElementById("root");
    parent.append(children);
}
const react={
create:function (tag,styles,content){
        const element= document.createElement(tag);
            element.innertext=content;
                for(let key in styles){
                    element.style[key]=styles[key];
                }
        return element;        
}
}
const head1=react.create("h1",{backgroundColor:"black",fontSize:"35px",color:"white"});
app(head1);