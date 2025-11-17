let a=10;
const b=20;
const fun=function add(num1,num2){
    var c;
    c=num1+num2;
    return c;
}

console.log(fun(a,b));
// 1) Memory Allocation
// let a=<uninitialised> or <temporal dead zone>
// const b=<uninitialised> or <temporal dead zone>
// const fun=<uninitialised> or <temporal dead zone>

// 2) Execution Phase
// let a=10
// const b=20
// const fun=fn body

// const fun =add(10,20)
// {
     // c=undefined;
// }
