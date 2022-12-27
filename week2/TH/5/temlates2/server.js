const http = require('http');
const fs = require('fs');

let server = http.createServer(((req, res) => {
    fs.readFile('./temlates2/templates/index.html', 'utf-8', function (err, data) {
        if (err) {
             res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }

        // thuc hien replace noi dung 
        let username = "Admin";
        str = str.replace('{username}', username)

         res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(str);
        return res.end();
    })
}))

server.listen('8080', function () {
    console.log('listening on http://localhost:8080')
});