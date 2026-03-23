const m1= new Map([
    ["Name","Rohit"],
    [132001,"Karnal"],
    [true,"$"],
    [[10,11,12],"Array"]
]);

// Iterating over the Map
for(let[key,value]of m1){
    console.log([key,value]);
}

// Output:
// [ 'Name', 'Rohit' ]
// [ 132001, 'Karnal' ]
// [ true, '$' ]
// [ [ 10, 11, 12 ], 'Array' ]