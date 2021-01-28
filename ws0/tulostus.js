var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<table style=width:100% border=1px ><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr>");
    response.end("Hello World!");
    console.log("morooo");

  })
  .listen(8081);
