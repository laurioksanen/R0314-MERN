var express = require("express");
var app = express();
app.use(express.static(__dirname))

app.get("/moi", (req,res)=>{
    res.send("Hello World!")
});

app.listen(8081, ()=>{
    console.log("app listening to port 8081")
});