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
function start(fun) {
    let x = 20, y = 10;
    console.log(fun(x, y));
}

// Usage
start(add);   
start(sub);   
start(mul);   
start(div);   