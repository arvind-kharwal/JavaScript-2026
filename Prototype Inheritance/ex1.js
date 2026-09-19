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
console.log(Teacher.tname)
console.log(Teacher.email)