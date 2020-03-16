var http = require('http');
var url = require('url');

function start(route) {
    http.createServer((request, response) => {
        var pathname = url.parse(request.url).pathname;
        console.log(request.url);
        route(pathname);
        response.writeHead('200', { 'Content-Type': 'text/plain' });
        response.write(pathname+'Hello World');
        response.end();
    }).listen(8080);
    console.log('Server start at http://127.0.0.1:8080');
}

exports.start = start;