const Person = {
    greet:function(name){
        console.log(`Hello, ${name}`);
    }
};
const Teacher = {
    teach:function(name,sub){
        console.log(`${name} teaches ${sub}`);
    }
};
Person.greet("Arvind");
Teacher.teach("Arvind","JS");

