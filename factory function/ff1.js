function createPerson(fname,lname){
    return {
        firstname:fname,
        lastname:lname,
        getFullName(){
            return fname+ " "+lname;
        }
    }
}
let p1 = createPerson("Arvind","Kumar");
console.log(p1.getFullName());
console.log(p1.firstname);
console.log(p1.lastname);

let p2 = createPerson("Yuvaan","Singh");
console.log(p2.getFullName());

