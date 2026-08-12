outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break outerLoop; // breaks out of the outer loop directly
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
