const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1===id2);

const id3 = Symbol.for('id');
const id4 = Symbol.for('id');
console.log(id3 === id4); // true

const id5 = Symbol();
const id6 = Symbol();
console.log(id5==id6);
