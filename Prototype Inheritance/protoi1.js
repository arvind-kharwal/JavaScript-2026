const Person={
    name: "Arvind",
    greet: function(){
        console.log(`I am ${this.name}`);
        
    }
};
Person.greet();
console.log(Person.__proto__);
