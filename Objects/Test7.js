const person = {
    name: "Arvind",
    age:45
};
person.greet = function(){
    console.log('Good Morning'+this.name);
}