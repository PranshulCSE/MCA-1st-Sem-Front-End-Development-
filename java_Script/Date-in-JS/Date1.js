const now=new Date();
console.log(now); // Output:2025-11-07T09:22:38.078Z
console.log(now.toString());  //Output: Mon Nov 10 2025 15:25:17 GMT+0530 (India Standard Time)
Currenttimestamp=Date.now();
console.log(Currenttimestamp); //Output:1762508126754 (MiliSeconds from the UTC i.e 1 Jan 1970)
const myDate=new Date(2025,11,7,15,7,45,4); //Providing our Specific date in format(YY,MM,DD,HH,MM,SS,MS)
console.log(myDate.toString()); // Output: Sun Dec 07 2025 15:07:45 GMT+0530 (India Standard Time)
// Always Remember Month Start from 0 in this Object
// const da=new myDate();
// console.log(da);
