let num = 10; // change this number to test
let isPrime = true; // assume prime at start

if (num <= 1) {
    isPrime = false; // 0 and 1 are not prime
} else {
    for (let i = 2; i < num/2; i++) {
        if (num % i === 0) {
            isPrime = false; // found a divisor
            break;           // no need to check further
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}
