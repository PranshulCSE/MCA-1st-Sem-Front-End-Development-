// How can we pass Arguments into Functions in JavaScript
function addnum(num1,num2){
    console.log(num1+num2);
}
addnum(5,9); 
    //  Output:14
addnum(5,8,9);
    //  Output:13

    function addnum2(num1,num2,num3,num4){
        console.log(num1+num2+num3+num4);
    }
addnum2(2,5,3,8);
    // Output:18
addnum2(2,5,3);
// Output:NaN

// For this Solution we can Assign Default values to the Argument
    
 function addnum3(num1=0,num2=0,num3=0,num4=0){
        console.log(num1+num2+num3+num4);
    }
addnum3(2,5,3);
// Output:10
addnum3(9,8);    
// Output:17

// Consider a Situation where we have to Add 100 Numbers

function addall(...num){
    console.log(num);
}

addall(11,22,33);
addall(10,82,43);
addall(19,24,13);

// [ 11, 22, 33 ]
// [ 10, 82, 43 ]
// [ 19, 24, 13 ]


//  Here we will use the Rest Operator;
function addall1(...num){
    let sum=0;
     for(n of num){
        sum+=n;
     }
     console.log(sum);
}
addall1(111,415,235,875,666);

// Output:2302