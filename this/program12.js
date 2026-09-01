let person={
    name: "Arvind",
    greet:function(){
        return this.name;
    }
};
let student = {
    name: "Yuvaan"
}
let N1 = person.greet.bind(student);
console.log(N1());