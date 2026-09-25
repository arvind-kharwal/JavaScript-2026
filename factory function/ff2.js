function createPerson(fname,lname){
    return {
        firstname:fname,
        lastname:lname,
    }
}
var personActions = {
    getFullName(){
        return this.firstname+" "+this.lastname;
    }
}

let p1 = createPerson("Arvind","Kumar");
let p2 = createPerson("Yuvaan","Singh");
p1.getFullName = personActions.getFullName;
p2.getFullName = personActions.getFullName;
console.log(p1.getFullName());
console.log(p2.getFullName());

