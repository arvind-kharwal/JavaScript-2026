const sym1 = Symbol('id');
const sym2 = Symbol('id');
const person = {};
person[sym1] = "Hello";
person[sym2] = "World";
console.log(person[sym1]);
console.log(person[sym2]);
let x= (sym1 === sym2) ;
console.log(x);
