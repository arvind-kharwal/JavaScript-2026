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

let res = compare(10,10);
console.log(res);