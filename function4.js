function add(a, b) {
    return a + b;
}
let sum = add;
let res1 = add(10, 20);
console.log(res1);
let res2 = sum(100,200);
console.log(res2);