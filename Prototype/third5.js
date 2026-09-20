let Animal = {
    name: "Tommy",
    speak: function() {
        console.log(`${this.name} bow bow.`);
    }
};
let Dog = Object.create(Animal);  
Dog.name = "Puffy";
// Dog.speak = function() {
//     console.log(`${this.name} barks.`);
// };

Dog.speak(); 