const student = {
    name: "Arvind",
    age: 44,
    laptop: {
        cpu:'i7',
        ram:'8gb',
        brand:'Dell',
    }
}
console.log(student.laptop.ram);
delete student.laptop;
console.log(student);