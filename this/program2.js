const person = {
    name: "Arvind",
    age: 40,
    greet:function(){
        console.log(this);
    }
};
console.log(this);
person.greet();