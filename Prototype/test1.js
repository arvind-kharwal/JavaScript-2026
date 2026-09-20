let arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr));
// Output: Array.prototype

let greet = function(){
    console.log("Hello");
}
console.log(Object.getPrototypeOf(greet));
