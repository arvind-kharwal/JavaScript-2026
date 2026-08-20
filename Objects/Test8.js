const person = {
    name: "Arvind",
    age:45
};
function greet(){
    console.log('Good Morning '+this.name);
}
person.greet = greet;
person.greet();