var fs = require("fs");
var http = require("http");

var sisalto = JSON.parse(fs.readFileSync("sampledata.json"));
 var data = "<table border='1'>";
    for(i=0;i<sisalto.length;i++) {
        var apu = "\n<tr>\n <td>"+sisalto[i].name+"</td>\n <td>"+sisalto[i].age+"</td>\n <td>"+sisalto[i].company+"</td>\n <td>"+sisalto[i].address + "</td>\n</tr>";
        // console.log(sisalto[i].name+"\n"+sisalto[i].age+"\n"+sisalto[i].company+"\n"+sisalto[i].address);
        data += apu;
    }
    data += "\n</table>"
    
    http.createServer(function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data)
        response.end();
    }).listen(8081);