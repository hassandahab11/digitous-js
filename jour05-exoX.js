// // 01
function calculate(num1, operateur, num2) {
    var x = parseInt(num1);
    var y = parseInt(num2);
    if (operateur === "+") {
        return x + y;
    } else {
        console.log("Error");
    }

}
console.log(calculate(process.argv[2], process.argv[3],process.argv[4])); 

//02 table

var mult = require("./table-utils");

mult();
console.log(process.argv);
mult(process.argv[2]);


