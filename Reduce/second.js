let nums = [1,2,3,4,5];
const res = nums.reduce(function(acc,cv){
    console.log(`${acc} and ${cv}`)
    return acc+cv;
},0);
console.log(res)