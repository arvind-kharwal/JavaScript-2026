// Example 1: Positive index
const str = "Hello";
console.log(str.at(0));   // "H"
console.log(str.at(1));   // "e"

// Example 2: Negative index
console.log(str.at(-1));  // "o" (last character)
console.log(str.at(-2));  // "l"

// Example 3: Out of range
console.log(str.at(10));  // undefined
