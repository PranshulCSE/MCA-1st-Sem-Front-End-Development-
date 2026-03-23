const da = new Date(1759262295036); // Creates a specific date
console.log("Before:", da.toUTCString());

// Let's change the month to May (index 4)
da.setMonth(4);
//Similarly we can Set other things by using set property
da.setDate(27);

console.log("After:", da.toUTCString()); // The ORIGINAL 'da' object has been changed.
