const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/kirjaudu",(req,res)=>{
//     console.log(req.body);
//     var email = req.body.email;
//     var pass = req.body.pass;
//   res.send("Lähetit lomakkeen! Email: " + email + " Password: " + pass);
res.sendFile(__dirname + "/lomake.html")
})

app.get("/list",(req,res)=>{
    res.sendFile(__dirname +"/exampletext.txt")
});

app.get("/json",(req,res)=>{
    var jsondata = require("./examplejson.json")
    res.json(jsondata)
    //res.sendFile(__dirname +"/examplejson.json")

});

app.post("/add",(req,res)=>{
    var jsondata = require("./examplejson.json")
    console.log("Nimi: "+req.body.Name+"\nEmail: "+req.body.email +"\nCompany: " + req.body.Company)
    jsondata.push({
        "Name": req.body.Name,
        "Email" : req.body.email,
        "Date" : new Date(),
        "Company": req.body.Company
    });

    fs.writeFile('examplejson.json', JSON.stringify(jsondata),(err)=>{
        if(err) return console.error(err);
    })
    res.send("data lisätty tiedostoon")
});

app.get("*",(req,res)=>{
    res.send("404!",404)
});

app.listen(8080, ()=>{
    console.log("server listening to port 8080")
})