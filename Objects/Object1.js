const student = {
    name: "Arvind",
    age: 44,
    display: function(){
        console.log('name:', this.name);
        console.log('Age:', this.age);
    }
}
console.log(student.name)
student.display();