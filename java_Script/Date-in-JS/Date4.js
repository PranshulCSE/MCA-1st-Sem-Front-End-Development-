// Formatting Dates for Display
const now = new Date();
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toTimeString());
console.log(now.toUTCString());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());

// Output will be
// Mon Nov 10 2025 15:39:32 GMT+0530 (India Standard Time)
// 2025-11-10T10:09:32.853Z
// 2025-11-10T10:09:32.853Z
// 15:39:32 GMT+0530 (India Standard Time)
// Mon, 10 Nov 2025 10:09:32 GMT
// Mon Nov 10 2025
// 10/11/2025, 3:39:32 pm
// 3:39:32 pm