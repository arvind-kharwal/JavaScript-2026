const person = {
    name: "Arvind",
    age: 25
};
person.greet = function(){
    console.log('I am '+this.name);
}
console.log(person);