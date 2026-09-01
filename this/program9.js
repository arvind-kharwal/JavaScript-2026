const person = {
    name: "Arvind",
    age:40,
    greet:function(){
        return this.name;
    }
};
let p1 = person.greet;
console.log(p1());