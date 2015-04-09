var fs = require('fs');

var numOfLines = 0;

function countLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function getLines (err, fileContent){
    // if (err) return console.error(err);
    numOfLines = fileContent.split("\n")
    callback();
  });
}

function displayLines() {
  console.log(numOfLines.length-1);
}

countLines(displayLines);

// str = buff().toString();
// arr = str.split("\n")
// console.log(arr.length-1);

