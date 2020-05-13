var fs = require("fs");
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);



function convertTextToArray() {
  var text = fs.readFileSync("./italiano.txt").toString('utf-8');
  var textByLine = text.split("\n")
  

  require('fs').writeFile(

    './italiano-ar.json',

    JSON.stringify(textByLine),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
  );  
}

// convertTextToArray();