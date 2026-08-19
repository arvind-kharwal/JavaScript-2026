const person = {
    name: "Arvind",
    age: 25
};
function greet(){
    console.log("I am "+this.name);
}
person.greet = greet;
person.greet();