const person = {
    name: "Arvind",
    age: 45,
    laptop:{
        cpu:'i7',
        ram:'8gb',
        brand1:"Dell & system"
    }
};
console.log(person);
console.log(person.name);
console.log(person.laptop.ram);
// console.log(person.laptop.brand);
console.log(person.laptop.brand?.length);
console.log(person['laptop']['ram']);
delete person.laptop.brand1;
console.log(person);