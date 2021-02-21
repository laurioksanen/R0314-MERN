var fs = require('fs');

fs.unlink("message.txt", function(err) {
    if (err) return console.error(err)
});


