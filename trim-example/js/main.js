// DESCRIPTION The trim() method

// The trim() method removes whitespace from both sides of a string.
//
// The trim() method does not change the original string.

// A string:
let str = " # Hello, World! % ";
console.log("Normal string: ", str);

// with trim().replace
let trimmedStr = str.trim().replace(/[^a-zA-Z0-9]/g, '');
console.log("String with trim replace: ",trimmedStr); // Output: "HelloWorld"
