var express = require("express");
var app = express();

app.set("view engine","ejs");

var data = {users:[
{name: 'Olli', age: 13},
{name: 'Tommi', age: 55},
{name: 'Kaisa', age: 43}
]}

app.get("/",(req,res)=>{
    res.render("pages/index",{
        new_heading:"This is from the js file",
        new_paragraph:"Lorem ipsum...",
        // new_footer:"This is a new foot"
    });
});

app.get("/users",(req,res)=>{
    res.render("pages/users",data);
});

app.listen(8081,()=>{
    console.log("listening to port 8081")
});