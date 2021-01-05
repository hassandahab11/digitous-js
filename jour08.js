var request = require("request");

//01
var countriesNames = [];
request.get("https://restcountries.eu/rest/v1/all", function(error, response, body){
    var getCountries = JSON.parse(body);
    for(var i=0; i<getCountries.length; i++){
        countriesNames.push(getCountries[i].name);
    }
    console.log(`the countries  : ${countriesNames}`);
});

//02

request.get("https://api.chucknorris.io/jokes/random", function(error, response, body){
    var getFact= JSON.parse(body);
    console.log(getFact.value);
})

