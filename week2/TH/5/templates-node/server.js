const http = require('http');
const fs = require ('fs');

let server = http.createServer(((req, res) => {
    fs.readFile('./TH/5/templates/index.html', 'utf-8', function (err, str) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.writable(srr);
        return res.end();
    })
}))

server.listen('8080', function(){
    console.log('listening on: localhost:8080');
})