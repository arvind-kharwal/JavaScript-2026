const Teacher ={
    tname: "Arvind",
};
const labAssistant = {
    aname: "Pawan",
    isavailable:false
};
const user ={
    email: "user@example.com"
}

Teacher.__proto__ = user;
Teacher.__proto__ = labAssistant;
console.log(Teacher.tname)
console.log(Teacher.email)
console.log(Teacher.aname)