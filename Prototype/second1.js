let Person = {
    name: "Arvind",
    age: 40,
    greet: function() {
        console.log(`${this.name} and ${this.age}`);
    }
};
let myarr = ['Arvind', 'Yuvaan'];
Person.greet();   // Output: Arvind and 40

// Option 2: Add greet to Array prototype
Array.prototype.greet = function() {
    console.log(`Array contents: ${this.join(', ')}`);
};

myarr.greet();    // Output: Array contents: Arvind, Yuvaan
