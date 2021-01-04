// 01 File System
var fs = require("fs");

fs.readFile("./jour07.txt", function(error, data){
    console.log(data.toString());
})

