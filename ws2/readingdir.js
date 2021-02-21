var fs = require('fs');

//console.log(fs.readdirSync(__dirname).toString())

fs.readdir(__dirname, function(err,data) {
    if(err) return console.log(err);
    let sisalto = data.toString().split(",");
    for(i=0;i<sisalto.length;i++) {
        console.log(sisalto[i]);
    }
    // console.log(data.toString())
})