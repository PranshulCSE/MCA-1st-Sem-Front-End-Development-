// Practicng Map in JavaScript


const arr=[11,22,33,44,55,66];

const n=arr.map(num=>{
    return num/11;
});

console.log(arr);
console.log(n);


// Same Task without return Keyword


const arr2=[100,200,300,400,5000,6000];
const n2=arr2.map(num=>num*2);

console.log(arr2);
console.log(n2);