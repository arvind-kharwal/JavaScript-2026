let n = 13;
let isPrime = true;
if(n<=1){
    isPrime = false;
}
else{
    for(i=2;i<n/2;i++)
    {
        if(n%i==0)
            isPrime=false;
    }
}

if(isPrime)
    console.log('Prime');
else
    console.log('Not Prime');