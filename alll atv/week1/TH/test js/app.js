const fs = require('fs');

console.log("Starting");
fs.readFile('test.txt', 'utf8', function(err,data){
    console.log(data);
});
console.log("End");