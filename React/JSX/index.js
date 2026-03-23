import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const NewElem=<>
<h1 className="header">Hello React Users!!</h1>
<h2 className="header" id="b">How Your MERN Stack is going on..</h2>
</>

root.render(NewElem);