let Animal = {
    name: "Tommy",
    speak: function() {
        console.log(`${this.name} bow bow.`);
    }
};

let Dog = Object.create(Animal);  // Dog inherits from Animal
Dog.name = "Puffy";

// Override speak method
Dog.speak = function() {
    console.log(`${this.name} barks.`);
};

Dog.speak();   // Output: Puffy barks
