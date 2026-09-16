const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => b !== 0 ? a / b : "Error: Division by zero";
// Higher-order function
function calculate(operation, x, y) {
    console.log(`Result: ${operation(x, y)}`);
}

// Usage
calculate(add, 10, 5);   // Result: 15
calculate(sub, 10, 5);   // Result: 5
calculate(mul, 10, 5);   // Result: 50
calculate(div, 10, 5);   // Result: 2