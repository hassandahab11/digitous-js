// 01 File System
var fs = require("fs");

fs.readFile("./jour07.txt", function(error, data){
    console.log(data.toString());
})

// 02 Map Double

var numbers = [1, 2, 3, 4, 5];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(doubles);

// 03 Map Names
var longNames =[{ 
    firstName: "Jane",
    lastName: "Doe"
},
{
    firstName: "John",
    lastName: "Smith"
}
];
var shortName = longNames.map(function(firstName, lastName){
    return firstName + lastName;
})
console.log(shortName);