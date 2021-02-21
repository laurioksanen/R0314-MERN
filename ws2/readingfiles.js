const { error } = require("console");
var fs = require("fs");

console.log("Program started");
var i = 0;
fs.readFile("example.txt", function(err,data) {
    i++;
    if(err) return console.error(err);
    console.log("Tiedoston sisältö: \n" + data.toString());
});

fs.readFile("example2.txt", function(err,data) {
    i++;
    if(err) return console.log(err);
    console.log("Toisen tiedoston sisältö: \n"+data.toString() +"\n program ended");

})







