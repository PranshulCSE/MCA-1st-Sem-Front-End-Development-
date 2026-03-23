// Difference b/w Rest & Spread Operator
const arr=[10,20,30,40,50];

const[first,second,...number]=arr;
// Spread Opearator
console.log(first,second,number);

const arr2=[60,70,80];

console.log(...arr,...arr2);

// Note: Spread Operator can only be used with array & objects
// It Basically helps in destructuring and making array elements as individuals



// Rest Operator

function add(...num)
{
    console.log(num);
}
// Rest Operator accepts values and returns them back in the form of Array
add(15,20,42,45,98,55,78);