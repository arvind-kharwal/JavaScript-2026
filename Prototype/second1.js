let Person = {
    name: "Arvind",
    age: 40,
    greet: function() {
        console.log(`${this.name} and ${this.age}`);
    }
};
Person.greet(); 
let myarr = ['Arvind', 'Yuvaan'];
Array.prototype.greet = function() {
    console.log(`${this.join()}`);
};
myarr.greet();    
