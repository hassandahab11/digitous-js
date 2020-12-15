function calculate(num1, num2){
    console.log(num1 * num2);
}
if(process.argv.length ===4){

// console.log(process.argv);
calculate(process.argv[2], process.argv[3]);
}else{
    console.log("Error");
}