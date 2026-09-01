const person = {
    name: "Arvind",
    age:40,
    greet:function(){
        return this.name;
    }
};
console.log(person.greet());