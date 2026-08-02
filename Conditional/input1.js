const readline =  require("readline")

rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter the name: ",function(name){
    console.log('The name is: '+name);
    rl.close();
});