const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer(function(req, res){

    if (req.method == 'GET') {
        fs.readFile('./views/todo.html','utf-8', function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            const toDoList = qs.parse(data);
            fs.readFile('./views/display.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{list}', toDoList.toDoList);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error');
        })
    }
});

server.listen(8080,function(){
    console.log('listening on port:8080')
})