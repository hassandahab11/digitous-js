// 01 Object

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};
console.log(cat);
console.log(cat.age);
if(isCute=true){
    console.log("So cute !");
}


// 02 Combine 

var cat2 ={
    name: "Gar",
    age: 6,
    isCute: true
};

var cats = Object.assign(cat, cat2);
console.log(cats);
console.log(cat.age);
console.log(cat2.isCute);

// Even 

function checkIfEven(num){
if(num % 2 ===0){
    console.log("even");
}else{
    console.log("Odd");
}

}
checkIfEven(5);
checkIfEven(10);
checkIfEven(7);
checkIfEven(18);


// 04 Compare

function compare(num1, num2){
    console.log(Math.floor(Math.random() * ( num2 - num1 + 1) + num1));
    if(num1 > num2){
        console.log("num1", "Is bigger");
    }if(num1 <num2){
        console.log("num2","Is bigger");

    }else{
        console.log("Both");
    }
}
compare(10,20);
compare(50,20);
compare(30,30);

// 05 Add UP
function addUp(num){
    var x = 0;
    for(i =1; i <= num; i++){
        x +=i;
      }  console.log(x);

}addUp(12);

// Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
//- Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`

function format(){
  var time={
        heures: 0,
        minutes: 0,
        secondes:0
    };
  console.log();
   var num =60;
   var heures = num /num;
   var minutes = num/num ;
   var secondes= minutes ;
   console.log(heures,minutes,secondes);
}format(3700);


