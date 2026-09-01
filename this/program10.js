const person = {
    name: "Arvind",
    age:40,
    greet:function(){
        return this.name;
    }
};
let p1 = person.greet.bind(person);
console.log(p1());