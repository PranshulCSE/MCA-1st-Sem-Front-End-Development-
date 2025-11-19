function double(){
     return function execute(){
        console.log("Hello javaScript Users!!");
    }

}
const n=double();
console.log(n);
// Output:[Function: execute]
console.log(n());
// Hello javaScript Users!!
// undefined  (Just Because function Execute doesnt return anything)
function single(value){
    return function ex(num){
        return num*value;
    }
}
const x= single(4);
console.log(x);
console.log(x(11));  //Output:44

// Another way to Pass parameters is 
// const x= single(4)(11);
