var http = require('http');
var url = require('url');
var util = require('util');

// http.createServer((request, response) => {
//     response.writeHead('200', {
//         'Content-Type': 'text/plain;charset=utf-8'
//     });

//     response.end(util.inspect(url.parse(request.url, true)));
//     //url.parse第二个参数默认为false,如果为true,则将解析query为对象

// }).listen(8080);


http.createServer((request, response) => {
    response.writeHead('200', {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    //解析url参数
    var params = url.parse(request.url, true).query;
    console.log(params);
    response.write("姓名：" + params.name);
    response.write('\n');
    response.write("age：" + params.age);
    response.end();
}).listen(8080);