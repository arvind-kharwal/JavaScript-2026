function multiply(a, b) {
    return a * b;
}
const double = multiply.bind();
console.log(double(5,3));
