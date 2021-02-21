//npm install request
const request = require("request");
const fs = require("fs");
const http = require("http")

    var url = "https://pastebin.com/raw/007hQiM4";
    var options = {json: true};

    var jsonvar = {name:"John Doe",
     age:'52',
     company:"laurea",
     address:"Ratatie 22" }
     
    request(url, options, (err,res,body) => {
        if(err) return console.error(err);
        if(res.statusCode==200) {
            let jsondata=body;
            jsondata.push(jsonvar)
            console.log(jsondata)

            fs.writeFile("dataset.json", JSON.stringify(jsondata) , (err) => {
                if(err) return console.error(err)
            })
        }
        fs.readFile("dataset.json", function(err,data) {
            if(err) return console.error(err);
            let jsondata = JSON.parse(data);
            delete jsondata[7];
            console.log(jsondata)
            fs.writeFile("dataset.json",JSON.stringify(jsondata),(err)=>{
                if(err) return console.error(err);
            })
            http.createServer(function(request, response) {
                response.writeHead(200, {'Content-Type': 'text/json'});
                response.write(JSON.stringify(jsondata))
                response.end();
            }).listen(8081);
        })
    });
    

    
    

