let http = require('http');
let fs = require('fs');
const qs = require('qs');

let server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const number = qs.parse(data);
            fs.writeFile('./views/index.html', 'utf8', function(err,datahtml){
                if (err) {
                    console.log(err);
                }
                let a = parseInt(number.number);
                console.log(a);
                if (a <= 10) {
                    switch (a) {
                        case 0:
                            datahtml = datahtml.replace('{stre', 'zero');
                            break;
                        case 1:
                            datahtml = datahtml.replace('{stre', 'one');
                            break;
                        case 2:
                            datahtml = datahtml.replace('{stre', 'two');
                            break;
                        case 3:
                            datahtml = datahtml.replace('{stre', 'three');
                            break;
                        case 4:
                            datahtml = datahtml.replace('{stre', 'four');
                            break;
                        case 5:
                            datahtml = datahtml.replace('{stre','five');
                            break;
                        case 6:
                            datahtml = datahtml.replace('{stre', 'six');
                            break;
                        case 7:
                            datahtml = datahtml.replace('{stre', 'seven');
                            break;
                        case 8:
                            datahtml = datahtml.replace('{stre', 'eight');
                            break;
                        case 9:
                            datahtml = datahtml.replace('{stre', 'nine');
                            break;
                        case 10:
                            datahtml = datahtml.replace('{stre', 'ten');
                            break;
                    }
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});


            
    