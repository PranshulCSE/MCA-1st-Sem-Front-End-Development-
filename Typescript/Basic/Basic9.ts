// Generics in TypeScript

function val(a:(number|string|number[])):(number|string|number[]){
    return a;
}

console.log(val(10));
console.log(val("Shivam"));
console.log(val([11,21,31,41,51]));


function value <T>(a:T):T{
    return a;
}

console.log(value(25));
console.log(value("Rohan"));
console.log(value({Name:"Shivam", Age:22,Gender:"Male"}));


// Generics with Interfaces & Objects


interface admin<T>{
    name:string,
    age:number,
    adhaar:T
}

const obj23: admin<number>={

    name:"Rohit",
    age:22,
    adhaar:9057010
}

console.log(obj23);

const obj24: admin<string>={

    name:"Amit",
    age:52,
    adhaar:"No"
}

console.log(obj24);

// Similarly We Can use musltiple Generics Also

