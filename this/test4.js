function multiply(a, b) {
    return a * b;
}
const double = multiply.bind(null);
console.log(double(5));
