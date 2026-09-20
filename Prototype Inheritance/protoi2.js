const Person={
    name: "Arvind",
    greet: function(){
        console.log(`I am ${this.name}`);
        
    }
};
console.log(Person.__proto__);
console.log(Person.__proto__ ===Object.prototype);

