const http = require('http')
const fs = require('fs')

let server = http.createServer(function (req, res) {
    let dataFile = '';
    let html = '';
    fs.readFile('./quanly1/data/data.json','utf8', function (err, str) {
        dataFile = JSON.parse(str);
        dataFile.forEach((value) => {
            html += '<tr>';
            html += `<td>${value.id}</td>`
            html += `<td>${value.name}</td>`
            html += `<td>${value.price}</td>`
            html += `<td><button class="btn btn-danger">Delete</button></td>`
            html += `<td><button class="btn btn-primary">Update</button></td>`
            html += '</tr>';
        });
    });

    fs.readFile('./quanly1/templates/index.html','utf8', function(err, data) {
        data = data.replace('{list-user}', html)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        res.end()
    });
})

server.listen(8080, function (){
    console.log('Server running localhost:8080')
})