function greet(city,country){
    console.log(`${this.name} ${city} ${country}`);
}
let person ={
    name: "Arvind"
};

let fun = greet.bind(person,"Meerut","India");
fun();