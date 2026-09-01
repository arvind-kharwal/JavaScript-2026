const person = {
    name: "Arvind",
    age: 40,
    greet:function(){
        console.log(`${person.name} and ${person.age}`);
    }
};
console.log(this);