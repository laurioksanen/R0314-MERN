
var express = require("express");
var app = express();
app.use(express.static("./"));

var DB = require("./db.js");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/kirjaudu", function (req, res) {
      if(req.body.button=="Submit") {
          console.log("Login attempt")
          DB.select(req, res);
      } if(req.body.button=="Register") {
          console.log("Register attempt")
          DB.register(req,res);
      }
  });

 app.get("/userpage", function (req, res) {
    res.send("You are now logged in!");
  });
  
  // Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
  app.get("*", function (req, res) {
    res.send("Cant find the requested page", 404);
  });

 
  app.listen(3000, function () {
    console.log("Listening to port 3000.");
  });