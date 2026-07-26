const student = {
    name: "Arvind",
    age: 44,
    laptop: {
        cpu:'i7',
        ram:8,
        brand1:'Dell',
    }
}
// console.log(student);
// console.log(student.name);
// console.log(student.laptop);
// console.log(student.laptop.brand);
// console.log(student.laptop.brand.length);
console.log(student.laptop.brand?.length);