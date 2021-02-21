var fs = require('fs');


fs.writeFileSync('message.txt', "Uusi tekstitiedosto, joka sisältää esimerkkitekstitiedostot yhdistettyinä:\n"+fs.readFileSync("example.txt").toString()+"\n"+fs.readFileSync("example2.txt").toString(), (err) => {
    if (err) throw err;
    console.log('yhdistetty');
  });

  
  fs.appendFileSync('message.txt', '\nI wrote this!', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
