let a=0,b=1;
let n = 5;
console.log(a,b);
for(i=0;i<n-2;i++)
{
    let c = a+b;
    console.log(c);
    a = b;
    b = c;
}