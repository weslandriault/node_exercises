var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);

str = buff.toString();
arr = str.split("\n")
console.log(arr.length-1);

