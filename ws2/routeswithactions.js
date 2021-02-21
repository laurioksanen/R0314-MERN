const http = require("http");
const fs = require("fs");
const { resolve } = require("path");

http.createServer(function(request, response) {
    console.log(request.url)

    if(request.url === "/frontpage") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("frontpage.html", function(err,data) {
            if(err) console.error(err);
            response.write(data); 
            response.end()
        })
    } else if(request.url === "/contact") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("contact.html", function(err,data) {
            if(err) console.error(err);
            response.write(data); 
            response.end()
        })
    } else if(request.url==="/plaintext") {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        fs.readFile("example.txt", function(err,data) {
            if(err) console.error(err);
            response.write(data.toString()); 
            response.end()
        })
    }

    else if(request.url==="/json") {
        response.writeHead(200, {'Content-Type': 'text/json'});
        fs.readFile("sampledata.json", function(err,data) {
            if(err) console.error(err);
            response.write(data); 
            response.end()
        })
    }
}).listen(8081);

console.log("server runnin at http://127.0.0.1:8081/");