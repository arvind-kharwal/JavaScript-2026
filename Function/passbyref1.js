let person ={
    name:"Arvind",
    age: 40
};

function increaseAge(obj){
    obj.age +=5;

    obj = {
        name: "Yuvaan",
        age: 6
    };
}
increaseAge(person);
console.log(person);