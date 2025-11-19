function createcounter(){
    let count=0;
    function increment(){ 
        // Closure is a function in which it remembers the outer function Variables even after their Execution
        count++;
        return count;
    }
    return increment;
}

const counter=createcounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// Output:
// 1
// 2
// 3
// 4
// 5
// 6