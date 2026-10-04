const person= {
    roll : 10
};

const student = Object.create(person); 
console.log(Object.getPrototypeOf(student) === person); 