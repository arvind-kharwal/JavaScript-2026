const person1 = {
    name: "Arvind",
    job:{
        empid: 100,
        dept:"CSE"
    }
};
console.log(person1);
const person2 = {...person1};
person2.job.dept = "AI";
console.log(person2);
