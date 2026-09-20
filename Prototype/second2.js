let Person = {
    name: "Arvind",
    age: 40,
    greet: function() {
        console.log(`${this.name} and ${this.age}`);
    }
};
let myarr = ['Arvind', 'Yuvaan'];
Array.prototype.show = function() {
    console.log('Show function');
};
Person.greet();   
myarr.show();    
