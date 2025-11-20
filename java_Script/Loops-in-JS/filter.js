const arr=[24,36,45,78,15,42,33,22,45];
// const newarr=arr.filter((Number)=>Number>25);
// console.log(newarr);
// Ouput: [ 36, 45, 78, 42, 33, 45 ]

// Otherway to do the Same task

const compare=(number)=>number>25;

arr.filtering=function(compare){
    const ans=[];
    for(let num of this){
        if(compare(num)){
          ans.push(num);
        }
    }
    return ans;
}
const newarr=arr.filtering((num)=>num>25);
console.log(newarr);

// Ouput: [ 36, 45, 78, 42, 33, 45 ]