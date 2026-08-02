let y = 1100;
if(y%100==0){
    if(y%400==0){
        console.log(`Leap year ${y}`);
    }
    else{
        console.log(`Not Leap year ${y}`);
    }
}
else{
    if(y%4==0){
        console.log(`Leap year ${y}`);
    }
    else{
        console.log(`Not Leap year ${y}`);
    }
}