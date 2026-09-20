let Person = {
    name: "Arvind",
    age: 40,
    greet: function(){
        console.log(`${this.name} and ${this.age}`);
    }
};
Person.greet();
Person.show();
Object.prototype.show = function(){
    console.log("I am show function");
}
Object.show();
Person.show();