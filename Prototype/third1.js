function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);

// Override speak method
Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog("Tommy");
dog.speak();   // "Tommy barks"
