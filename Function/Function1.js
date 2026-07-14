// function say(message){
//     console.log('This is:'+message);
//     console.log('This is:',{message});
//     console.log(`This is ${message}`);
// }
// say("Hello JavaScript")


function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

let a = 10, b = 20;
let res = compare(10,20);

if(res==0)
    console.log('Both numbers are same');
else if(res ==1)
    console.log(`${a} is less than ${b}`);
else 
    console.log(`${a} is greater than ${b}`);
