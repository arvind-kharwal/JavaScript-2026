const person={
    name: "Arvind",
    age:40,
    greet:function(){
        return person.name;
    }
};
const student = {
    name: "Yuvaan"
}
let N1 = person.greet.bind(student);
console.log(N1());