function mult(num){
    var result =1;
    for( var i=1; i<=10; i++){
        result =num * i;
        console.log(`${num} x ${i} = ${result}`);
    }
}
console.log(process.argv);
mult(process.argv[2]);


module.exports = mult;