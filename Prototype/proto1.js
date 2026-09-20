function Person(name,age,sal){
    this.name = name;
    this.age = age;
    this.sal = sal;
}
Person.prototype.increaseSalary = function(inr){
    this.sal+=inr;
}
Person.prototype.display= function(){
    console.log(`Name: ${this.name}`);
    console.log(`Salary after hike:${this.sal}`);
    
}

const P1 = new Person("Arvind",40,10000);
P1.increaseSalary(2300);
P1.display();
const P2 = new Person("Yuvaan",5,0)
P2.increaseSalary(233);
P2.display();