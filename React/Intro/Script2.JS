const react={
create:function (element,styles,content){
        let elem= document.createElement(element);
            elem.innertext=content;
                for(style in styles){
                        elem.style=[styles]
                            console.log(styles);
}
}
}
react.create("h1",{backgroundColor:"black",fontSize:"35px",color:"white"});

