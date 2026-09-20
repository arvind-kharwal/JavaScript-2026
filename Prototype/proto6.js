const Parent={
    role:"Teacher",
    age:50
};
const Child={
    role:"Student",
};
Object.setPrototypeOf(Child,Parent);
console.log(Child.age);
