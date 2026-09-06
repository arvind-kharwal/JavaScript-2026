const person = {
    name: "Arvind",
    greet: function(){
        const self = this;
        setTimeout(function(){
            console.log(self.name);
        }, 3000);
    }
};
person.greet(); 