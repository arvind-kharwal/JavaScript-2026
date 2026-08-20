const person = {
    name: "Arvind",
    age:45,
    greet: function(){
    console.log('Good Morning '+this.name);
}
};
person.greet();