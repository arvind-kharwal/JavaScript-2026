const add = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const mul = (a,b)=> a*b;
const div = (a,b)=> b!=0?a/b:"Division by zero";
function start(fun, x,y){
    console.log(`Result ${fun(x,y)}`)
}
start(add,4,5)
start(sub,4,5)
start(mul,4,5)
start(div,4,5)
start(div,4,0)