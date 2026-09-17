"use strict";
function test() {
    console.log(this); 
    console.log(globalThis); 
}

test();
