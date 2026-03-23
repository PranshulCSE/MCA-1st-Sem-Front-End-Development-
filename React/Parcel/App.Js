import React from "react";
import ReactDom from "react-dom";
const head1=React.createElement("h1",{},"Hello React Users!!");
const head2=React.createElement("h3",{},"Hello MERN Users!!");

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(head2);