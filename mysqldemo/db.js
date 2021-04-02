var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    //database: "yritys",
    database:"logindemo",
  });
  exports.select = function (req, res, query) {
var email = req.body.email;
var pass = req.body.pass;
var query = `SELECT * FROM users WHERE userid = ? and password=SHA1(?);`;
con.connect(function (err) {

//    con.query("SELECT * FROM henkilo WHERE kunta = 'Helsinki'", function (err, result, fields) {
//     if (err) throw err;
// Tulostetaan kaikki tulosdata
//console.log(result);
// console.log(result.length);
// Tulostetaan tulosjoukon viides alkio
//console.log(result[5]);
    // Tulostetaan tulosjoukon viides alkio ja siitä kenttä enimi
// console.log(result[5].enimi);

con.query(query,[email,pass],(err,result,fields)=>{
   if(err) return console.log("Tapahtui virhe " + err)
   console.log("Tulosrivien määrä: " + result.length);
   if (result.length == 1) {
    res.redirect("/userpage");
    console.log("Tunnukset oikein!");
  } else {
    res.redirect("/");
    console.log("Väärät tunnukset tai käyttäjää ei löydy");
  }
});

})
};

exports.register = function (req, res, query) {
    var email = req.body.email;
    var name = req.body.name
    var pass = req.body.pass;
    var query = 'INSERT INTO `users` (`userid`, `name`, `password`) VALUES ( ?, ?, SHA1(?))';
    con.connect(function (err) {

    con.query(query,[email,name,pass],(err,result,fields)=>{
       if(err) return console.log("Tapahtui virhe " + err)
    //    console.log("Tulosrivien määrä: " + result.length);
    //    if (result.length == 1) {
    //     res.redirect("/userpage");
    //     console.log("Tunnukset oikein!");
    //   } else {
    //     res.redirect("/");
    //     console.log("Väärät tunnukset tai käyttäjää ei löydy");
    //   }
    console.log("New User Added")
    res.redirect("/");
    });
    
    })
    };