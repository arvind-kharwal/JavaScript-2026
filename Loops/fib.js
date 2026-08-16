let a = 0, b = 1;
let n = 5;

process.stdout.write(a + " " + b + " ");

for (let i = 0; i < n - 2; i++) {
    let c = a + b;
    process.stdout.write(c + " ");
    a = b;
    b = c;
}
