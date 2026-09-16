const nums = [1,2,3,4,5,6,7,8,9,10];
const newnums = [];
nums.forEach((n)=>{
    if(n>4){
        newnums.push(n);
    }
});
console.log(newnums)