const student = {
    name: "Arvind",
    age: 44,
    laptop1: {
        cpu:'i7',
        ram:8,
        brand:'Dell',
    }
}
console.log(student?.laptop?.brand.length);