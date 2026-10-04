// console.log(Object);
// console.log(Object.prototype);
const person = {
    name:"Arvind"
};
person.prototype.getName = function(){
    console.log(`${this.name}`);
    
}
person.getName();
