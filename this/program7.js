function outer(){
    "use strict";
    console.log(this===undefined);
    function inner(){
        console.log(this===undefined);
    }
    inner();
}
outer();