const person1 = {
    name: "Arvind",
    job:{
        empid: 100,
        dept:"CSE"
    }
};
console.log(person1);
const person2 = JSON.parse(JSON.stringify(person1))
person2.job.dept = "ECE";
console.log(person2);
console.log(person1);