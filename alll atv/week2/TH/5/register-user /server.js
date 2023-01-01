let http = require('http');
let fs = require('fs');
let qs = require('fs');

let server = http.createServer(function(req, res){
    if (req.method === 'GET'){
        fs.readFile('./views/resgister.html', function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            console.log(qs.parse(data));
            return res.end('register successful!');
        })
        req.on ('error', () => {
            console.log('error')
        })
    }
})

server.listen(8080, function(){
    console.log('listening on port 8080');
}) 