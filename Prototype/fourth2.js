let Parent = {
    role:"Teacher"
};
let Child = Object.create(Parent);
Child.role = "Student";
console.log(Child.role);
console.log(Parent.role);
// after deleteing the role of student
delete Child.role;
console.log(Child.role);
console.log(Parent.role);
