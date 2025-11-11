const names=["Arjun","Karan","Nikhil","Manish"];
console.log(names.toString());
// Output:Arjun,Karan,Nikhil,Manish


// Join Operation: Joins Elements with that Symbol which is Provided

console.log(names.join("-"));
// Output: Arjun-Karan-Nikhil-Manish

console.log(names.join("<->"));
// Output: Arjun<->Karan<->Nikhil<->Manish

// Index of Operation: Return its index if that particular item is Present otherwise returns -1
console.log(names.indexOf("Nikhil"));
// Output: 2
console.log(names.indexOf("Ram"));
// Output: -1


// LastIndex of Operation: Return the last index if that particular item when its occur otherwise returns -1
const names1=["Arjun","Karan","Nikhil","Manish","karnal","Nikhil"];
console.log(names1.lastIndexOf("Nikhil"));
// Output: 5
console.log(names1.lastIndexOf("Ram"));
// Output: -1

// Includes operation: Returns True if Element is present in Array Otherwise Return False
const names2=["Arjun","Karan","Nikhil","Manish","karnal","Nikhil"];
console.log(names2.includes("Nikhil"));
// Output: True
console.log(names2.includes("Ram"));
// Output: False