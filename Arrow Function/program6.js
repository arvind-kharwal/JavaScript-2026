const person = {
    name: "Arvind",
    greet: function(){
        setTimeout(()=>{
            console.log(this.name);
        }, 2000);
    }
};
person.greet(); 