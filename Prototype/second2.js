let Person = {
    name: "Arvind",
    age: 40,
    greet: function(){
        console.log(`${this.name} and ${this.age}`);
    }
};
let myarr = ['Arvind','Yuvaan'];
myarr.greet();