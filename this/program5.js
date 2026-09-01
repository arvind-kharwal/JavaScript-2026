function show() {
   console.log(this === global); // true in non-strict mode
}
show();