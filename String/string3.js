// Example 1: Positive index
const str = "Hello";
console.log(str.charAt(0));   // "H"
console.log(str.charAt(1));   // "e"
console.log(str.charAt(4));   // "o"

// Example 2: Out of range
console.log(str.charAt(10));  // "" (empty string)

// Example 3: Difference from at()
console.log(str.charAt(-1));  // "" (does NOT support negative indices)
console.log(str.at(-1));      // "o" (last character)
