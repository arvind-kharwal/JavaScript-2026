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

let res = compare(20,10);
if(res==0)
    console.log('Both numbers are same');
else if(res ==1)
    console.log('a<b');
else 
    console.log('a>b');
