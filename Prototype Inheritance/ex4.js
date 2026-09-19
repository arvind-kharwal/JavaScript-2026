let user1 = "Arvind       ";
console.log(user1.length);
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The True length:${this.trim().length}`);  
}

user1.trueLength();
"     Yuvaan".trueLength();