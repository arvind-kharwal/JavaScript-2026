const person ={
    name: "Arvind"
};
function display(message){
    console.log(message+" "+this.name);
}

display.call(person,"Hello,");