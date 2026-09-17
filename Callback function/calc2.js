const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => b !== 0 ? a / b : "Division by zero";

// Arrow function version of start
const start = (fun, x, y) => {
    console.log(`Result: ${fun(x, y)}`);
};

// Usage
start(add, 4, 5);   // Result: 9
start(sub, 4, 5);   // Result: -1
start(mul, 4, 5);   // Result: 20
start(div, 4, 5);   // Result: 0.8
start(div, 4, 0);   // Result: Division by zero
