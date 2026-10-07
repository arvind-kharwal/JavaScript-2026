const person = {
    age: 20
};
const student  = Object.create(person);
// console.log(student);
// console.log(student.age);
// console.log(Object.getPrototypeOf(person));
// console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student) === person);