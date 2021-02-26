var http = require("http");
http.createServer(function (request, response) {
    console.log(request.url)
    if(request.url ==="/helloworld") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<table style=width:100% border=1px ><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr>");
        response.end("Hello Worlddddd");
       
    } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("Hello Worldddddhgggdgfgdg");
       
    }
    console.log("m");

  })
  .listen(8081);