const person = {
    name: "Arvind",
    greet: function(){
        setTimeout(function(){
            console.log(this.name);
        }.bind(this), 3000);
    }
};
person.greet();
