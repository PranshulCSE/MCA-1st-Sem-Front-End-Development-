const head1=React.createElement("h1",{},"Hello React Users!!");
const head2=React.createElement("h3",{id:"head", className:"box",style:{backgroundcolor:"black",fontSize:"30px",color:"white"}},"Hello MERN Users!!");
// ReactDom.render(head1,document.getElementById('root'));

const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(head1);
root.render(head2);