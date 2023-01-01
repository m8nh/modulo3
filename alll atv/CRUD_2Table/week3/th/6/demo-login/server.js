let http = require('http');
let url = require('url');
let fs = require('fs');
let qs = require('qs');
let StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer(function(req, res) {
    // get url and parse
    var parseUrl = url.parse(req.url, true);
    // get the path
    var path = parseUrl.pathname;
    var trimPath = path.replace(/^\/+|\/+$/g, '');

    var method = req.method.toLowerCase();

        if(method == 'get') {
            var chosenHandler = (typeof (router[trimPath]) !== 'underfined') ? router[trimPath] :handlers.notFound;
            chosenHandler(req, res);
        }
        else {
            var chosenHandler = router.profile;
            chosenHandler(req, res);
        }
});

server.listen(3000, function(){
    console.log('server listening on port:3000')
});

var handlers = {};
// form login 
handlers.login = function (rep, res) {
    fs.readFile('./6/demo-login/view/login.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}

// home page
handlers.home = function(rep, res){ fs.readFile('./6/demo-login/view/login.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}

// not found
handlers.notFound = function(rep, res){
     fs.readFile('./6/demo-login/view/notfound.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}
// profile
handlers.profile = function(rep, res){
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    })
    req.on('end',() => {
        data = qs.parse(data);
        var name = data.name;
        var stringObject = "<h1>Heloo + name + </h1>";
        console.log(name);
        fs.write('./6.demo-login/view/profile.html', stringObject, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("Ghi du lieu vao file thanh cong");
            console.log("doc di lieu vua duoc ghi");
            fs.write('./6.demo-login/view/profile.html', stringObject, function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        });
    });
}

// definer the request router
var router = {
    'home': handlers.home,
    'login': handlers.login,
    'profile': handlers.profile
}