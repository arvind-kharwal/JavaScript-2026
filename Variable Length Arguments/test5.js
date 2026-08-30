function outer(){
    let name = "Arvind";
    function inner(){
        let age = 40;
        console.log(name);
        console.log(age);
    }
    // console.log(age);   // this is giving an error & inner is not executed
    inner(); 
}
outer();