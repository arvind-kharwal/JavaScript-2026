const sym = Symbol('id');
const person = {};
person[sym] = 123;
console.log(person[sym]);