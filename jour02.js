// 01 Number

var x = 102;
var y = "13.9";
console.log(x,y);

//03 Round

var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);


//04 Arithmétique
var test = 12;
var bis = 5;
console.log(test + bis, test / bis, test * bis, test % bis, test - bis);

// 05 Comparaison
var testX = 143;
var bisY = 219;
console.log("V-1 :", testX = bisY, "V-2 :",testX == bisY,"V-3 :", testX === bisY,"V-4 :",testX < bisY, "V-5 :",testX <= bisY,"V-6 :",testX > bisY,"V-7 :",testX >= bisY);

//06 Condition
var limit=  50;
var score = 64;
if(score>=limit){
    console.log("Ok good");
}else{
    console.log("Oh nooooo........");
}

//07 Condition II
var password = "azerty"; 
if(password.length>5){
    console.log("The password is secure");
}else{
    console.log("Erorere");
}

//08 Condition III
var xy = true;
switch (xy) {
    case true:
        console.log("Everything is good" );
    case true || false: 
        console.log("Something is good");   
        break;

    default:
        console.log("Nothing is good");
}