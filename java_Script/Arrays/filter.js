const arr=[24,36,45,78,15,42,33,22,45];
const newarr=arr.filter((Number)=>Number>25);
console.log(newarr);
Ouput: [ 36, 45, 78, 42, 33, 45 ]

// way to do the Same task by creating custom methods

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
const newar=arr.filtering((num)=>num>25);
console.log(newarr);

// Ouput: [ 36, 45, 78, 42, 33, 45 ]

// This Function is created for a specific Array if we us this filtering function with another array it will give error
// Lets See How?

const Arr=[14,25,74,65,35,45,98,44,66];
const newr=Arr.filtering((num)=>num>25);
console.log(newr);
// Output: Arr.filtering is not a function

// To Handle this Problem we have to make this function compatible with All Arrays

// We can Achieve this by doing followig task
// Array.prototype.filtering=function(compare){  //By this the whole filtering function will compatible with All Arrays 
//     const ans=[];
//     for(let num of this){
//         if(compare(num)){
//           ans.push(num);
//         }
//     }
//     return ans;
// }

