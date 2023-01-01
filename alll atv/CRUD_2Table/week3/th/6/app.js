// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// let server = http.createServer(function(req, res) {
//    // geturl and parse
//     var parseUrl = url.parse(req.url, true);
//     // get the path
//     var path = parseUrl.pathname;
//     var trimPath = path.replace(/^\/+|\/+$/g, '');

//     var chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
//     chosenHandler(req, res);
// })

// server.listen(3000,function(){
//     console.log('server running at localhost:3000');
// });

// var handlers = {};
// // products page
// handlers.products = function (rep, res) {
//     fs.readFile('./6/view/products.html', function(err, data){
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write(data);
//         return res.end();
//     })
// };

// //handlers.users page
// handlers.users = function (rep, res) {
//     fs.readFile('./6/view/user.html', function(err, data){
//         res.writeHead(200, {'Content-type': 'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }

// //not found
// handlers.notFound = function (rep, res) {
//     fs.readFile('./6/view/notfound.html', function(err, data){
//         res.writeHead(200, {'Content-type': 'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }

// var router = {
//     'users': handlers.users,
//     'projects': handlers.projects
// }

var http = require('http');
var url = require('url');
var fs = require('fs');


let server = http.createServer(function (req, res) {
    //get url and parse
    var parseUrl = url.parse(req.url, true);

    //
    // //get the path
    var path = parseUrl.pathname;
    var trimPath = path.replace(/^\/+|\/+$/g, '')
   

    var chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
    console.log(router[trimPath]);
    // console.log(chosenHandler());
    chosenHandler(req, res);
});




var handlers = {};
// products page
handlers.products = function (rep, res) {
    fs.readFile('./week3/th/6/view/products.html',"utf-8", function(err, data) {
        if(err){
            console.log(err.message);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
    });
   
    
};
// handlers.users page
handlers.users = function (rep, res) {
    fs.readFile('./week3/th/6/view/user.html',"utf-8" ,function(err, data) {
         if(err){
            console.log(err.message);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
         return res.end();
    });
};

// not found
handlers.notFound = function (rep, res) {
    fs.readFile('./week3/th/6/view/notfound.html',"utf-8", function(err, data) {
         if(err){
            console.log(err.message);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
         return res.end();
    });
};


server.listen(3000, "localhost", function () {
    console.log('server running at localhost:3000 ')
});

//definer the request router
var router = {
    'users': handlers.users,
    'products': handlers.products
}