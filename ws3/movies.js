const http = require("http");
const request = require("request");
const PORT = process.env.PORT || 5000;

var url ="http://www.omdbapi.com/?s=star+wars&apikey=8bfb494d";
var options = {json: true};
var table = "<table> <tr> <th>Title</th> <th>Year</th> <th>Picture</th> </tr>"
var jsondata;

request(url, options, (err, res, body)=> {
    if(err) return console.error(err);
    jsondata = body;
    for(var a in jsondata.Search) {
        console.log(jsondata.Search[a].Title);
        table += "<tr><td>"+jsondata.Search[a].Title+"</td> <td>"+jsondata.Search[a].Year+"</td> <td><img src="
        +jsondata.Search[a].Poster+"></td> </tr>";
    }
    table +="</table>";
});

http.createServer(function (request, response) {
    console.log("moi")
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(table);
    response.end();
  })
  .listen(PORT);
  console.log(PORT)