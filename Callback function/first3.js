const add = function(a, b) {
    return a + b;
};

const sub = function(a, b) {
    return a - b;
};

const mul = function(a, b) {
    return a * b;
};

const div = function(a, b) {
    return b !== 0 ? a / b : "Error: Division by zero";
};

// Higher-order function
function start(fun, x, y) {
    console.log(fun(x, y));
}

// Usage
start(add, 10, 20);   
start(sub, 30, 10);   
start(mul, 3, 5);     
start(div, 60, 12);  
